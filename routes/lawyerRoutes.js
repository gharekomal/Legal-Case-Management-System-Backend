const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
    
const {
  getLawyerProfile,
  getMyCases,
  getMyClients
} = require("../Controllers/lawyerController");

// all lawyer routes are protected
router.get("/profile", authMiddleware, getLawyerProfile);
router.get("/cases", authMiddleware, getMyCases);
router.get("/clients", authMiddleware, getMyClients);

module.exports = router;
