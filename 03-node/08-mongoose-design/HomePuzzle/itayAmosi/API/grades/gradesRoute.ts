import express from "express";
const router = express.Router();

import {
    // getStudentGradesInCourse,
    addMockGrades,
    createGrade,
    getGradesByStudentId,
} from "./gradesControle";


router
  .post("/add-mock-grades", addMockGrades)
  .post("/create-grade", createGrade)
  .get("/get-grades", getGradesByStudentId)

export default router;