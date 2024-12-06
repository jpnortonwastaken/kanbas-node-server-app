import model from "./model.js";
import mongoose from "mongoose";

export const findAssignmentsForCourse = (courseId) => {
  return model.find({ course: courseId });
};

export const createAssignment = (assignment) => {
  return model.create(assignment);
};

export const deleteAssignment = (assignmentId) => {
  return model.deleteOne({ _id: new mongoose.Types.ObjectId(assignmentId) });
};

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  return model.updateOne(
    { _id: new mongoose.Types.ObjectId(assignmentId) },
    assignmentUpdates
  );
};
