const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  title: String,
  caseNumber: String,
  courtName: String,
  caseType: String,
  status: { type: String, default: "Open" },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  lawyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Case", caseSchema);
