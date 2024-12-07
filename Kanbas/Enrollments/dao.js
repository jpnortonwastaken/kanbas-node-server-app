import Database from "../Database/index.js";
import model from "./model.js";

export function findEnrollmentsForUser(userId) {
  return Database.enrollments.filter(
    (enrollment) => enrollment.user === userId
  );
}

export function enrollUserInCourse(userId, courseId) {
  const enrollment = {
    _id: new Date().getTime().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(enrollment);
  return enrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
}

export const findUsersForCourse = async (courseId) => {
  const enrollments = Database.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  const userIds = enrollments.map((enrollment) => enrollment.user);
  const users = Database.users.filter((user) => userIds.includes(user._id));
  return users;
};
