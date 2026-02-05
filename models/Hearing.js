const mongoose = require("mongoose");

const hearingSchema = new mongoose.Schema({
  case: { type: mongoose.Schema.Types.ObjectId, ref: "Case" },
  hearingDate: Date,
  notes: String
});

module.exports = mongoose.model("Hearing", hearingSchema);
