let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
const StudentModel = require("../models/student.model");
const sendEmailto = require("../services/email.service");
const sendToKit = require("../services/storage.service");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

const meApiController = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse("user login", req.user));
});

const registerController = asyncHandler(async (req, res) => {
  let {
    studentName,
    studentEmail,
    password,
    course,
    semesterYear,
    phoneNumber,
  } = req.body;
  let profileImage = req.file;
  if (
    !studentName ||
    !studentEmail ||
    !password ||
    !course ||
    !semesterYear ||
    !phoneNumber
  ) {
    throw new ApiError(400, "all field are required");
  }
  const studentData = {
    studentName,
    studentEmail,
    password,
    course,
    semesterYear,
    phoneNumber,
  };

  if (profileImage) {
    const response = await sendToKit(
      profileImage.buffer,
      profileImage.originalname,
    );

    studentData.profileImage = response.url;
  }

  const student = await StudentModel.create(studentData);

  let token = student.generatejwt();

  res.cookie("token", token);

  sendEmailto(
    studentEmail,
    "Registration Successful",
    `<h1>${studentName} registered successfully</h1>`,
  );
  return res
    .status(201)
    .json(new ApiResponse("student register successfully", student));
});
const loginController = asyncHandler(async (req, res) => {
  let { studentEmail, password } = req.body;
  if (!studentEmail || !password) {
    throw new ApiError(400, "all field are required");
  }
  let isexisted = await StudentModel.findOne({ studentEmail });

  if (!isexisted) {
    throw new ApiError(404, "user not found");
  }

  let checkpass = await isexisted.comparePass(password);
  if (!checkpass) {
    throw new ApiError(400, "incorrect credential");
  }

  let token = isexisted.generatejwt();
  res.cookie("token", token);

  if (checkpass) {
    res
      .status(200)
      .json(new ApiResponse("student login succesully", isexisted));
  }
});
const forgetpasswordController = asyncHandler(async (req, res) => {
  let { studentEmail } = req.body;

  if (!studentEmail) {
    throw new ApiError(400, "email not found");
  }

  let findUser = await StudentModel.findOne({ studentEmail });
  console.log(findUser);
  if (!findUser) {
    throw new ApiError(404, "user not found");
  }
  let token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY, {
    expiresIn: "10m",
  });

  let rawapi = `http://localhost:3000/api/auth/reset-password/${token}`;

  sendEmailto(
    studentEmail,
    "reset-password",
    `<a href=${rawapi}>click here</a>`,
  );

  return res.status(200).json(new ApiResponse("success"));
});
const resetpasswordController = asyncHandler(async (req, res) => {
  let token = req.params.token;

  if (!token) {
    throw new ApiError(404, "token not found");
  }

  let decode = jwt.verify(token, process.env.SECRET_KEY);
  if (!decode) {
    throw new ApiError(401, "session time out");
  }

  let user = await StudentModel.findById({ _id: decode.id });

  if (!user) {
    throw new ApiError(404, "user not found");
  }
  res.render("index.ejs", { id: user._id });
});
const setPasswordController = asyncHandler(async (req, res) => {
  let { newpassword, id } = req.body;

  if (!newpassword || !id) {
    throw new ApiError(400, "all field are required");
  }
  let user = await StudentModel.findById({ _id: id });
  if (!user) {
    throw new ApiError(404, "user not found");
  }

  let hashpass = await bcrypt.hash(newpassword, 10);
  await StudentModel.findByIdAndUpdate(
    id,
    {
      password: hashpass,
    },
    {
      new: true,
    },
  );
  res.status(200).json(new ApiResponse("password updated"));
});
const LogoutController = asyncHandler(async (req, res) => {
  let userId = req.user._id;

  if (!userId) {
    throw new ApiError(401, "unauthorise");
  }
  res.clearCookie("token");
  res.status(200).json(new ApiResponse("logout success"));
});
const updateProfileController = asyncHandler(async (req, res) => {
  let userId = req.user._id;

  let { studentName, studentEmail } = req.body;
  let profileImage = req.file;
  console.log(profileImage);
  let existedUser = await StudentModel.findById(userId);

  if (!existedUser) {
    throw new ApiError(404, "user not found");
  }
  let update = {};
  if (studentName != undefined) {
    update.studentName = studentName;
  }
  if (studentEmail != undefined) {
    update.studentEmail = studentEmail;
  }

  if (profileImage != undefined) {
    let response = await sendToKit(
      profileImage.buffer,
      profileImage.originalname,
    );

    update.profileImage = response.url;
  }
  let updatedprofile = await StudentModel.findByIdAndUpdate(userId, update, {
    new: true,
  });

  res.status(200).json(new ApiResponse("updated", updatedprofile));
});

module.exports = {
  meApiController,
  registerController,
  loginController,
  forgetpasswordController,
  resetpasswordController,
  setPasswordController,
  LogoutController,
  updateProfileController,
};
