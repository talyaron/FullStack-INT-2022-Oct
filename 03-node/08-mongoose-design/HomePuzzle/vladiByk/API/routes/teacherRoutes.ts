import express from "express";
const teacherRouter = express.Router();
import {
  getAllTeachers,
  getTeacher,
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controllers/teacherController";

teacherRouter.route("/").get(getAllTeachers).post(createTeacher);
teacherRouter.route("/:id").patch(updateTeacher).delete(deleteTeacher);

teacherRouter.route

export { teacherRouter };
