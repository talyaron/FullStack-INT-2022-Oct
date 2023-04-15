import express from "express";
import StudentModel from "./studentModel";
import { addStudent, getStudents, updateStudentName,deleteStudent } from "./studentsControl";
const router = express.Router();

router.post('/add-student', addStudent);
router.get('/get-students',getStudents);
router.patch('/update-student-name', updateStudentName)
router.delete('/delete-student',deleteStudent)


export default router;
