const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserInfo
} = require("../Controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// routes
router.post("/register", register);
router.post("/login", login);
router.get("/getUserInfo", authMiddleware, getUserInfo);

module.exports = router;
