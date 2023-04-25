import express from "express";
const router = express.Router();
import {
  addStudent,
  updateStudent,
  getStudents,
  updateStudentName,
  deleteStudent,
} from "./studentsControl";

router
  .post("/add-Student", addStudent)
  .put("/update-Student", updateStudent)
  .get("/get-Students", getStudents)
  .patch("/update-Student-name", updateStudentName)
  .delete("/delete-Student", deleteStudent);

export default router;
