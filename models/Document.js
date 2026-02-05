const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  case: { type: mongoose.Schema.Types.ObjectId, ref: "Case" },
  filename: String,
  path: String
}, { timestamps: true });

module.exports = mongoose.model("Document", documentSchema);
