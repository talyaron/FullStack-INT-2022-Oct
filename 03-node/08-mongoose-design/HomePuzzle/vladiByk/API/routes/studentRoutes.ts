import express from "express";
const studentRouter = express.Router();
import {
  getAllStudents,
  getStudent,
  getStudentsInCourse,
  emptyCollection,
  deleteAllStudentsInCourse,
  createStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/studentController";

studentRouter
  .route("/")
  .get(getAllStudents)
  .post(createStudent)
  .delete(emptyCollection);

studentRouter
  .route("/:studentId")
  .get(getStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

studentRouter
  .route("/inCourse/:courseId")
  .get(getStudentsInCourse)
  .delete(deleteAllStudentsInCourse);

// module.exports = studentRouter;
export { studentRouter };
