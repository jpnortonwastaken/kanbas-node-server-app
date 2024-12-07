import Database from "../Database/index.js";
import model from "./model.js";

export const findEnrollmentsForUser = async (userId) => {
  try {
    const enrollments = await model.find({ user: userId }).lean().exec();
    return enrollments.map((enrollment) => ({
      _id: enrollment._id.toString(),
      user: enrollment.user.toString(),
      course: enrollment.course.toString(),
    }));
  } catch (error) {
    console.error("Error finding enrollments for user:", error);
    throw error;
  }
};

export const enrollUserInCourse = async (userId, courseId) => {
  try {
    const enrollment = await model.create({
      user: userId,
      course: courseId,
      enrollmentDate: new Date(),
    });

    return {
      _id: enrollment._id.toString(),
      user: enrollment.user.toString(),
      course: enrollment.course.toString(),
    };
  } catch (error) {
    console.error("Error enrolling user in course:", error);
    throw error;
  }
};

export const unenrollUserFromCourse = async (userId, courseId) => {
  try {
    await model.deleteOne({ user: userId, course: courseId });
  } catch (error) {
    console.error("Error unenrolling user from course:", error);
    throw error;
  }
};

export const findUsersForCourse = async (courseId) => {
  try {
    const enrollments = await model.find({ course: courseId }).lean().exec();
    return enrollments.map((enrollment) => enrollment.user.toString());
  } catch (error) {
    console.error("Error finding users for course:", error);
    throw error;
  }
};
