import express from "express";
const router = express.Router();

import {
    addMockTeacher,
    getTeachers,
    deleteTeacher,
    updateTeacherName,
} from "./teachersControle";


router
  .post("/add-mock-teacher", addMockTeacher)
  .get("/get-teachers", getTeachers)
  .delete("/delete-teacher", deleteTeacher)
  .patch("/update-teacher-name", updateTeacherName)
export default router;