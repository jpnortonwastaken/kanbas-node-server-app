// routes.js
import mongoose from "mongoose";
import * as dao from "./dao.js";

function QuestionRoutes(app) {
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      const question = await dao.createQuestion({
        ...req.body,
        quizId: req.params.quizId,
      });
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      const { quizId } = req.params;

      if (!quizId || !mongoose.Types.ObjectId.isValid(quizId)) {
        return res.status(400).json({
          error: "Invalid quiz ID",
          quizId,
          questions: [],
        });
      }

      const questions = await dao.findQuestionsByQuiz(quizId);
      res.json(questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: error.message, questions: [] });
    }
  });

  app.get("/api/questions/:questionId", async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    res.json(question);
  });

  app.put("/api/questions/:questionId", async (req, res) => {
    const status = await dao.updateQuestion(req.params.questionId, req.body);
    res.json(status);
  });

  app.delete("/api/questions/:questionId", async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  });

  app.delete("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      await dao.deleteQuestionsByQuiz(req.params.quizId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export default QuestionRoutes;
