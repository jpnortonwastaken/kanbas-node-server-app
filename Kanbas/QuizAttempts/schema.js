// attemptSchema.js
import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizModel",
      required: true,
    },
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "QuestionModel",
        },
        answer: mongoose.Schema.Types.Mixed,
        isCorrect: Boolean,
      },
    ],
    score: Number,
    startedAt: { type: Date, default: Date.now },
    submittedAt: Date,
    completed: { type: Boolean, default: false },
  },
  { timestamps: true, collection: "attempts" }
);

export default attemptSchema;
