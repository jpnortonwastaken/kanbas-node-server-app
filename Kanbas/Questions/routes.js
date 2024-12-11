// routes.js
import * as dao from "./dao.js";

function QuestionRoutes(app) {
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const question = await dao.createQuestion({
      ...req.body,
      quizId: req.params.quizId,
    });
    res.json(question);
  });

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const questions = await dao.findQuestionsByQuiz(req.params.quizId);
    res.json(questions);
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
}

export default QuestionRoutes;
