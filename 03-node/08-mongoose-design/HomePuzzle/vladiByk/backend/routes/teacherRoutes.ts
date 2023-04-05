import express from "express";
const teacherRouter = express.Router();
import {
  getAllTeachers,
  getTeacher,
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controllers/teacherController";

teacherRouter.route("/").get(getTeacher).post(createTeacher);
teacherRouter.route("/:id").patch(updateTeacher).delete(deleteTeacher);

export { teacherRouter };
