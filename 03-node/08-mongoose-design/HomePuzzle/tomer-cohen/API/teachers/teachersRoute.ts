import express from "express";
const router = express.Router();


import{
  addMockTeacher,
  getTeacher,
  deleteTeacher,
  updateTeacherName,  
}from "./teachersControle";


router 
.post("/add-mock-teacher",addMockTeacher)
.get("/get-teacher",getTeacher)
.delete("/delete-techer",deleteTeacher)
.patch("/update-teacher-name",updateTeacherName)
export default router