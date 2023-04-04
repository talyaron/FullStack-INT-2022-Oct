import express from "express";
const router = express.Router();

import {
  addStudentGrades,
  addMockStudent,
  getStudents,
  deleteStudent,
  updateStudentName,
} from "./studentsControle";


router
  .post("/add-student-grades", addStudentGrades)
  .post("/add-mock-student", addMockStudent)
  .get("/get-students", getStudents)
  .delete("/delete-student", deleteStudent)
  .patch("/update-student-name", updateStudentName);

export default router;