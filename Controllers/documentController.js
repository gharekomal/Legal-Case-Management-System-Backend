const Document = require("../models/Document");

const uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const document = await Document.create({
      case: req.body.caseId,
      filename: req.file.filename,
      path: req.file.path
    });

    res.status(201).json(document);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadDocument
};
