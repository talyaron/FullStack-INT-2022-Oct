import express from "express";
const router = express.Router();

import {
  addGrade,
  deleteGrade,
  getGrades
} from "./gradesControl";

router
  .get('/all', getGrades)
  .post("/add", addGrade)
  .delete("/delete", deleteGrade);

export default router;