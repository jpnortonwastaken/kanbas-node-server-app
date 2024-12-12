// dao.js
import model from "./model.js";

export const createQuestion = (question) => model.create(question);

export const findQuestionsByQuiz = (quizId) => model.find({ quizId }).exec();

export const findQuestionById = (questionId) => model.findById(questionId);

export const updateQuestion = (questionId, question) =>
  model.findByIdAndUpdate(questionId, question, { new: true });

export const deleteQuestion = (questionId) =>
  model.findByIdAndDelete(questionId);

export const deleteQuestionsByQuiz = (quizId) => model.deleteMany({ quizId });
