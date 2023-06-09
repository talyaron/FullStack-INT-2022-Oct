import express from "express";
const router = express.Router();

import {
  addCourse,
  updateCourse,
  deleteCourse,
  getCourses
  
} from "./coursesControl";

router
  .get('/all', getCourses)
  .post("/add", addCourse)
  .patch("/update-course-name", updateCourse)
  .delete("/delete-course", deleteCourse);

export default router;