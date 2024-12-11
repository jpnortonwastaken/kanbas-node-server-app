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
      default: "MULTIPLE_CHOICE",
    },
    title: { type: String, required: true },
    points: { type: Number, default: 0 },
    question: { type: String, required: true },
    choices: [String], // For multiple choice
    correctAnswer: mongoose.Schema.Types.Mixed, // Different for each type
    order: { type: Number, default: 0 },
  },
  { timestamps: true, collection: "questions" }
);

export default questionSchema;
