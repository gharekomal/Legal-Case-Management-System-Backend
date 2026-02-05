const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const documentController = require("../Controllers/documentController");

/* Multer config */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/documents");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(
  "/upload",
  auth,
  upload.single("file"),
  documentController.uploadDocument
);

module.exports = router;
