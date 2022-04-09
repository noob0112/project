const mongoose = require("mongoose");

const SymbolSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    symbolCode: { type: String, required: true, unique: true },
    data: [
      {
        open: { type: Number, required: true },
        close: { type: Number, required: true },
        low: { type: Number, required: true },
        hight: { type: Number, required: true },
        volume: { type: Number, required: true },
        date: { type: Date, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Symbol", SymbolSchema);
