let express = require("express");
const {
  registerController,
  loginController,
  forgetpasswordController,
  resetpasswordController,
  setPasswordController,
  LogoutController,
  updateProfileController,
  meApiController,
} = require("../controllers/auth.controller");
const upload = require("../config/multer");
const Authmiddleware = require("../middleware/Auth.middleware");

let router = express.Router();

router.get("/me", Authmiddleware, meApiController);
router.post("/register", upload.single("profileImage"), registerController);
router.post("/login", loginController);
router.post("/forget-password", forgetpasswordController);
router.get("/reset-password/:token", resetpasswordController);
router.post("/set-password", setPasswordController);
router.get("/logout", Authmiddleware, LogoutController);

router.post(
  "/update",
  Authmiddleware,
  upload.single("profileImage"),
  updateProfileController,
);
module.exports = router;
