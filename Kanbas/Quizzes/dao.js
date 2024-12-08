import model from "./model.js";

export const createQuiz = (quiz) => model.create(quiz);
export const findQuizzesByCourse = (courseId) => model.find({ courseId });
export const findQuizById = (quizId) => model.findById(quizId);
export const updateQuiz = (quizId, quiz) =>
  model.findByIdAndUpdate(quizId, quiz, { new: true });
export const deleteQuiz = (quizId) => model.findByIdAndDelete(quizId);
