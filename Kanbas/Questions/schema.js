// schema.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizModel",
      required: true,
    },
    type: {
      type: String,
      enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_BLANK"],
      required: true,
    },
    title: { type: String, required: true },
    points: { type: Number, required: true },
    question: { type: String, required: true, default: "New Question" },
    choices: [String], // For multiple choice
    correctAnswer: mongoose.Schema.Types.Mixed, // Different for each type
  },
  {
    timestamps: true,
    collection: "questions", // Add this to use correct collection
  }
);

export default questionSchema;
