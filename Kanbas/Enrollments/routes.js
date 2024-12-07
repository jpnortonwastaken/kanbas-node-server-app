import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/users/:userId/enrollments", async (req, res) => {
    const { userId } = req.params;
    try {
      const enrollments = await enrollmentsDao.findEnrollmentsForUser(userId);
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ error: "Error fetching enrollments" });
    }
  });

  app.post("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    try {
      const newEnrollment = await enrollmentsDao.enrollUserInCourse(
        userId,
        courseId
      );
      res.json(newEnrollment);
    } catch (error) {
      res.status(500).json({ error: "Error creating enrollment" });
    }
  });

  app.delete("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    try {
      await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: "Error deleting enrollment" });
    }
  });
}
