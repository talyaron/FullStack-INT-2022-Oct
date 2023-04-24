import express from "express";
const router = express.Router();

import {
  createStudent,
  getStudents,
  deleteStudent,
  // findStudents,
  updateStudentName,
} from "./studentsControle";

router
  .post("/create-student", createStudent)
  .get("/get-students", getStudents)
  // .get("/find-students", findStudents)
  .delete("/delete-student", deleteStudent)
  .patch("/update-student-name", updateStudentName)
export default router;
