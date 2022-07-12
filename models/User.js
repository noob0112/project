const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, max: 50 },
    phone: { type: Number, required: true, unique: true },
    email: { type: String, index:true, required: true, unique: true, max: 50 },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    // post: [ type: mongoose.Schema.ObjectId, ref: "Post"],
    following: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    courses: [{type: mongoose.Schema.ObjectId, ref: "Course"}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
