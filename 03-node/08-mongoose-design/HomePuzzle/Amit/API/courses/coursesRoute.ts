import express from "express";
const router = express.Router();

import {
  addCourse,
  updateCourse,
  deleteCourse,
  
} from "./coursesControl";

router
  .post("/add-course", addCourse)
  .patch("/update-course", updateCourse)
  .delete("/delete-course", deleteCourse);

export default router;