import express from "express";
const router = express.Router();

import {
  addGrade,
  updateGrade,
  deleteGrade,
  
} from "./gradesControl";

router
  .post("/add-grade", addGrade)
  .patch("/update-grade", updateGrade)
  .delete("/delete-grade", deleteGrade);

export default router;