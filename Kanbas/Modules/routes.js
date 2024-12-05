import mongoose from "mongoose";
import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  app.delete("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      // Add validation
      if (!mongoose.Types.ObjectId.isValid(moduleId)) {
        return res.status(400).json({ error: "Invalid module ID format" });
      }
      const status = await modulesDao.deleteModule(moduleId);
      res.send(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = await modulesDao.updateModule(moduleId, moduleUpdates);
    res.send(status);
  });
}
