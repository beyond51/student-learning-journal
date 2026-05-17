const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let StudentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    studentEmail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    course: {
      type: String,
      required: true,
    },

    semesterYear: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

StudentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  return;
});
StudentSchema.methods.generatejwt = function () {
  let token = jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};
StudentSchema.methods.comparePass = async function (password) {
  let checkpass = await bcrypt.compare(password, this.password);
  return checkpass;
};

let StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;
