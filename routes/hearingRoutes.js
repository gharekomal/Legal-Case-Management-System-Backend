const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const hearingController = require("../Controllers/hearingController");

router.post("/", auth, hearingController.addHearing);
router.get("/", auth, hearingController.getHearings);

module.exports = router;
