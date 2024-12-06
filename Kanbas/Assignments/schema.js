import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    points: Number,
    due_date: String,
    available_date: String,
    available_until: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);

export default schema;
