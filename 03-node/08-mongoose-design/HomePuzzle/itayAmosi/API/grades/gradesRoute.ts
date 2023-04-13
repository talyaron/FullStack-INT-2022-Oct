import express from "express";
const router = express.Router();

import {
    // getStudentGradesInCourse,
    addMockGrades,
    getGradesByStudentId,
} from "./gradesControle";


router
  .post("/add-mock-grades", addMockGrades)
  .get("/get-grades", getGradesByStudentId)

export default router;