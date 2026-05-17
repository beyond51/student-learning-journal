const mongoose = require("mongoose");
let EntrySchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    date: {
      type: String,
      default: new Date().toISOString().split("T")[0],
    },
  },
  {
    timestamps: true,
  },
);

const EntryModel = mongoose.model("entries", EntrySchema);
module.exports = EntryModel;
