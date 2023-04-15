import express from "express";
const teacherRouter = express.Router();
import {
  getAllTeachers,
  getTeacherCourses,
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controllers/teacherController";

teacherRouter.route("/").get(getAllTeachers).post(createTeacher);
teacherRouter.route("/:id").get(getTeacherCourses).patch(updateTeacher).delete(deleteTeacher);

export { teacherRouter };
