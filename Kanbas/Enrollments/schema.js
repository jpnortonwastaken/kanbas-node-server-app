import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    enrollmentDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["ENROLLED", "PENDING"],
      default: "ENROLLED",
    },
  },
  { collection: "enrollments" }
);
export default enrollmentSchema;
