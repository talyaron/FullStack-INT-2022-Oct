import express from "express";
const router = express.Router();

import {
    // getStudentGradesInCourse,
    addMockGrades,
} from "./gradesControle";


router

  // .get("/get-students", getStudentGradesInCourse)
  .post("/add-mock-grades", addMockGrades)


export default router;