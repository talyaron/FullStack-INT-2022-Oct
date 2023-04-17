import express from "express";
const router = express.Router();

import {
    addMockTeacher,
    getTeacher,
    deleteTeacher,
    updateTeacherName,
} from "./teachersControle";


router
  .post("/add-mock-teacher", addMockTeacher)
  .get("/get-teachers", getTeacher)
  .delete("/delete-teacher", deleteTeacher)
  .patch("/update-teacher-name", updateTeacherName)
export default router;