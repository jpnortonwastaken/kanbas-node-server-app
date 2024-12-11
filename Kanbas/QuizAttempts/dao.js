import model from "./model.js";

export const createAttempt = (attempt) => model.create(attempt);

export const findAttemptsByUser = (userId, quizId) =>
  model
    .find({ userId, quizId })
    .sort({ createdAt: -1 })
    .populate("answers.questionId");

export const findAttemptById = (attemptId) =>
  model.findById(attemptId).populate("answers.questionId");

export const updateAttempt = (attemptId, attempt) =>
  model.findByIdAndUpdate(attemptId, attempt, { new: true });
