const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.ObjectId, ref: "User" },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    comments: [{type: mongoose.Schema.ObjectId, ref: "Comment"}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
