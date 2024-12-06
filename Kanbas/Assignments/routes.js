import * as assignmentsDao from "./dao.js";
import mongoose from "mongoose";

export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    try {
      const { assignmentId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(assignmentId)) {
        return res.status(400).json({ error: "Invalid assignment ID format" });
      }
      const status = await assignmentsDao.deleteAssignment(assignmentId);
      res.send(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    try {
      const { assignmentId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(assignmentId)) {
        return res.status(400).json({ error: "Invalid assignment ID format" });
      }
      const assignmentUpdates = req.body;
      const status = await assignmentsDao.updateAssignment(
        assignmentId,
        assignmentUpdates
      );
      res.send(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
