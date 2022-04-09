const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, require: true },
    url: { type: String, require: true },
    image: { type: String, require: true },
    users: [{ type: mongoose.Schema.ObjectId, ref: "User", unique: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
