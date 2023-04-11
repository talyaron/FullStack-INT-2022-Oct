import express from "express";
const router = express.Router();

import {
  addMockStudents,
  getStudents,
  deleteStudent,
  updateStudentName,
} from "./studentsControle";

router
  .post("/add-mock-students", addMockStudents)
  .get("/get-students", getStudents)
  .delete("/delete-student", deleteStudent)
  .patch("/update-student-name", updateStudentName)
export default router;
