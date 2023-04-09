
  import express from "express";
const coursesRoute = express.Router();
import {
  addCourse,
  updateCourse,
  getCourse,
  updateCourseName,
  deleteCourse,
} from "./coursesControl";

coursesRoute
  .post("/add-course", addCourse)
  .put("/update-course", updateCourse)
  .get("/get-courses", getCourse)
  .patch("/update-course-name", updateCourseName)
  .delete("/delete-course", deleteCourse);

export default coursesRoute;
