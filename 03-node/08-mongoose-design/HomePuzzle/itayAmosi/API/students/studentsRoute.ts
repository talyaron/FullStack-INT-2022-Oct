import express from "express";
const router = express.Router();

import {
  addMockStudent,
  getStudents,
  deleteStudent,
  // findStudents,
  updateStudentName,
} from "./studentsControle";

router
  .post("/add-mock-student", addMockStudent)
  .get("/get-students", getStudents)
  // .get("/find-students", findStudents)
  .delete("/delete-student", deleteStudent)
  .patch("/update-student-name", updateStudentName)
export default router;
