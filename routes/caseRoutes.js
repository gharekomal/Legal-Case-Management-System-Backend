const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const caseController = require("../Controllers/caseController");

router.post("/", auth, caseController.createCase);
router.get("/", auth, caseController.getCases);

module.exports = router;
