import express from 'express'
import { createCourse, createExam,createGrade ,getStudentGradesInCourse} from './courseControler';
const router = express.Router();


router.post('/create-course',createCourse)
.post('/create-exam', createExam)
.post('/create-grade',createGrade)
.get('/get-student-course-grades',getStudentGradesInCourse);

export default router;