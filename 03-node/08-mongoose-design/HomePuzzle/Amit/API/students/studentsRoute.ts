import express from "express";
const router = express.Router();

import {
  addStudent,
  getStudents,
  updateStudentName,
  deleteStudent,
  
} from "./studentsControl";

router
  .post("/add-student", addStudent)
  .get("/get-students", getStudents )
  .patch("/update-student-name", updateStudentName)
  .delete("/delete-student", deleteStudent);

export default router;
