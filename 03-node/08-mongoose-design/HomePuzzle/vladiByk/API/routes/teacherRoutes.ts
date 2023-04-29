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
teacherRouter
  .route("/:id")
  .get(getTeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

export { teacherRouter };
