import express from "express";
const router = express.Router();
import {
  addStudent,
  updateStudent,
  getStudents,
  //updateStudentName,
  deleteStudent,
} from "./studentsControls";

router
  .post("/add-student", addStudent)
  .put("/update-student", updateStudent)
  .get("/get-students", getStudents)
  //.patch("/update-student-name", updateStudentName)
  .delete("/delete-student", deleteStudent);

export default router;
