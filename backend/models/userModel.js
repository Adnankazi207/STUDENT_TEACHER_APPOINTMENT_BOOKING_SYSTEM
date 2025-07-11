const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: function () {
    return this.role === "teacher" ? true : false;
  },
    },

    department:{type : String},
    subject:{type : String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);