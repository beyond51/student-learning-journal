const StudentModel = require("../models/student.model");
const ApiError = require("../utils/apiError");
let jwt = require("jsonwebtoken");

const Authmiddleware = async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    throw new ApiError(404, "token not found");
  }

  let decode = jwt.verify(token, process.env.SECRET_KEY);
  if (!decode) {
    throw new ApiError(400, "unauthorise");
  }

  let user = await StudentModel.findById({ _id: decode.id });
  if (!user) {
    throw new ApiError(404, "user not found");
  }
  req.user = user;
  next();
};
module.exports = Authmiddleware;
