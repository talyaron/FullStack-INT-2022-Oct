import express from "express";
const router = express.Router();

import {
  addStudent,
  getStudents,
  updateStudentName,
  deleteStudent,
} from "./studentsControl";

router
  .post("/add", addStudent)
  .get("/all", getStudents)
  .patch("/update-student-name", updateStudentName)
  .delete(`/delete/:_id`, deleteStudent);

export default router;
