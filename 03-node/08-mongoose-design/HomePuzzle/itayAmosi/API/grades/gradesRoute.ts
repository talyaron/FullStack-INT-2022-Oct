import express from "express";
const router = express.Router();

import {
    addMockGrades,
    createGrade,
} from "./gradesControle";


router
  .post("/add-mock-grades", addMockGrades)
  .post("/create-grade", createGrade)

export default router;