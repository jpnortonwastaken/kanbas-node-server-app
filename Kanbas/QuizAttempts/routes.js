// routes.js
import * as dao from "./dao.js";

function AttemptRoutes(app) {
  app.post("/api/quizzes/:quizId/attempts", async (req, res) => {
    try {
      const attempt = await dao.createAttempt({
        ...req.body,
        quizId: req.params.quizId,
      });
      res.json(attempt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/quizzes/:quizId/attempts/:userId", async (req, res) => {
    try {
      const attempts = await dao.findAttemptsByUser(
        req.params.userId,
        req.params.quizId
      );
      res.json(attempts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/attempts/:attemptId", async (req, res) => {
    try {
      const attempt = await dao.findAttemptById(req.params.attemptId);
      res.json(attempt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/attempts/:attemptId", async (req, res) => {
    try {
      const status = await dao.updateAttempt(req.params.attemptId, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export default AttemptRoutes;
