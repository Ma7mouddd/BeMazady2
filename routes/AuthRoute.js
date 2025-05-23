const express = require("express");
const router = express.Router();
const protect = require("../middlewares/AuthMiddle");
const authorize = require("../middlewares/AuthorizeMiddle");
const {
  registerValidationRules,
  loginValidationRules,
} = require("../utils/Validators/AuthValid");
const {
  Signup,
  login,
  Forgotpassword,
  Verifycode,
  Resetpassword,
  VerifyEmail,
  resendVerificationCode,
} = require("../controllers/AuthController");

// Register route
router.post("/register", registerValidationRules, Signup);

// Login route
router.post("/login", loginValidationRules, login);

// Forgot password
router.post("/forgotpassword", Forgotpassword);

// verify code
router.post("/verify", Verifycode);

router.put("/resetpassword", Resetpassword);

// ✅ Email verification
router.post("/verify-email", protect, VerifyEmail);
router.post("/resend-verification", protect, resendVerificationCode);

module.exports = router;
