import model from "./model.js";
import mongoose from "mongoose";

export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createModule(module) {
  delete module._id;
  return model.create(module);
}
export function deleteModule(moduleId) {
  try {
    return model.deleteOne({ _id: new mongoose.Types.ObjectId(moduleId) });
  } catch (error) {
    console.error("Error in deleteModule:", error);
    throw error;
  }
}
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}
