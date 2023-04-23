import express from "express";
const router = express.Router();

import {
    addMockGrades,
    createGrade,
    getGradesByStudentId,
    getStudentGradesInCourse,
} from "./gradesControle";


router
  .post("/add-mock-grades", addMockGrades)
  .post("/create-grade", createGrade)
  .get("/get-grades", getGradesByStudentId)
  .get("/get-student-course-grades", getStudentGradesInCourse)

export default router;