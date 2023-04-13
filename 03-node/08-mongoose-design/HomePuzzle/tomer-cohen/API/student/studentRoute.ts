import express from "express";
const router = express.Router();

import{
addMockStudent,
getStudents,
deleteStudent,
updateStudentName
}from "./studentControle";

router
.post("/add-mock-student",addMockStudent)
.get("/get-students",getStudents)
.delete("/delete-student",deleteStudent)
.patch("/update-student-name",updateStudentName)

export default router