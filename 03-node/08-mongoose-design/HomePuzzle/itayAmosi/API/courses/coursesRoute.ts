import express from "express";
const router = express.Router();

import {
    createCourse,
    getCourses,
    getStudentGradesInCourse,
} from "./coursesControle";


router
.post("/create-course", createCourse)
.get("/get-courses", getCourses)
.get("/get-student-course-grades", getStudentGradesInCourse)

export default router;