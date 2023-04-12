import express from "express";
const courseRouter = express.Router();
import {
  getAllCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController";

courseRouter.route("/").get(getAllCourses).post(createCourse);

courseRouter
  .route("/:id")
  .get(getCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

export { courseRouter };
