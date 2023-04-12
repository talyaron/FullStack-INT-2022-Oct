import express from "express";
const studentRouter = express.Router();
import {
  getAllStudents,
  getStudentsInCourse,
  createStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/studentController";

studentRouter.route("/").get(getAllStudents).post(createStudent);
studentRouter.route("/:id").get(getStudentsInCourse).patch(updateStudent).delete(deleteStudent);

// module.exports = studentRouter;
export { studentRouter };
