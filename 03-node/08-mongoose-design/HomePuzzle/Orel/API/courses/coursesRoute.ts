
  import express from "express";
const router = express.Router();
import {
  addCourse,
  updateCourse,
  getCourse,
  updateCourseName,
  deleteCourse,
} from "./coursesControl";

router
  .post("/add-course", addCourse)
  .put("/update-course", updateCourse)
  .get("/get-courses", getCourse)
  .patch("/update-course-name", updateCourseName)
  .delete("/delete-course", deleteCourse);

export default router;
