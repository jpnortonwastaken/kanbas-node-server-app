import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseModel",
      required: true,
    },
    description: String,
    type: {
      type: String,
      enum: [
        "GRADED_QUIZ",
        "PRACTICE_QUIZ",
        "GRADED_SURVEY",
        "UNGRADED_SURVEY",
      ],
      default: "GRADED_QUIZ",
    },
    points: { type: Number, default: 0 },
    published: { type: Boolean, default: false },
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
    settings: {
      shuffleAnswers: { type: Boolean, default: true },
      timeLimit: { type: Number, default: 20 },
      multipleAttempts: { type: Boolean, default: false },
      maxAttempts: { type: Number, default: 1 },
      showCorrectAnswers: { type: Boolean, default: true },
      accessCode: String,
      oneQuestionAtTime: { type: Boolean, default: true },
    },
  },
  { timestamps: true, collection: "quizzes" }
);

export default quizSchema;
