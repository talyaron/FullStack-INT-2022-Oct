import express from "express";
const router = express.Router();

import {
  addCourse,
  updateCourse,
  deleteCourse,
  getStudentGradesInCourse,
  
} from "./coursesControl";

router
  .post("/add-course", addCourse)
  .patch("/update-course", updateCourse)
  .delete("/delete-course", deleteCourse)
  .post("/get-student-grades-in-course", getStudentGradesInCourse);

export default router;