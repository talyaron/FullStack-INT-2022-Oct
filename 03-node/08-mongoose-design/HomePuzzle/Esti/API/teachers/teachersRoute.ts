import express from "express";
const router = express.Router();
import {
  addTeacher,
  updateTeacher,
  getTeachers,
  updateTeacherName,
  deleteTeacher,
} from "./teachersControl";

router
  .post("/add-Teacher", addTeacher)
  .put("/update-Teacher", updateTeacher)
  .get("/get-Teachers", getTeachers)
  .patch("/update-Teacher-name", updateTeacherName)
  .delete("/delete-Teacher", deleteTeacher);

export default router;
