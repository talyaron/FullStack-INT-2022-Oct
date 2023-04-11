import express from "express";
const router = express.Router();

import {
    // getStudentGradesInCourse,
    addMockGrades,
    getGrade,
} from "./gradesControle";


router
  .post("/add-mock-grades", addMockGrades)
  .get("/get-grades", getGrade)

export default router;