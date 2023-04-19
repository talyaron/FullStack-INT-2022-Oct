import express from "express";
import StudentModel from "./studentModel";
import { addStudent, getStudents, updateStudentName,deleteStudent, getstudentsforselect } from "./studentsControl";
const router = express.Router();
router
.post('/add-student', addStudent)
.get('/get-students',getStudents)
.patch('/update-student-name', updateStudentName)
.delete('/delete-student',deleteStudent)
.get('/get-select',getstudentsforselect)


export default router;
