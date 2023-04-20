import express from "express";
const router = express.Router();

import {
  addGrade,
  updateGrade,
  deleteGrade,
  getGrades
  
} from "./gradesControl";

router
  .get('/all', getGrades)
  .post("/add-grade", addGrade)
  .patch("/update-grade-name", updateGrade)
  .delete("/delete-grade", deleteGrade);

export default router;