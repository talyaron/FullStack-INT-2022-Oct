import express from "express";
const courseRouter = express.Router();
import {
  getAllCourses,
  getCourse,
  getTeacherCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController";

courseRouter.route("/").get(getAllCourses).post(createCourse);
courseRouter.route("/teacher/:teacherId").get(getTeacherCourses);

courseRouter
  .route("/:courseId")
  .get(getCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

export { courseRouter };
