const mongoose = require("mongoose");

const PredictStockSchema = new mongoose.Schema(
    {
        Open: { type: Number, required: true },
        Hight: { type: Number, required: true },
        Low: { type: Number, required: true },
        Close: { type: Number, required: true },
        Volume: { type: Number, required: true },
        Date: { type: Date, required: true, index: true },
        Symbol: { type: String, required: true, index: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("PredictStock", PredictStockSchema);
