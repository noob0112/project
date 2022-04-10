const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
    image: { type: String },
    time: { type: Date, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
