const mongoose = require("mongoose");

const SymbolSchema = new mongoose.Schema(
  {
    symbolCode: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Symbol", SymbolSchema);
