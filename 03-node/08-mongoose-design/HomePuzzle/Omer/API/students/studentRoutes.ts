import express from "express";
const studentRouter = express.Router();

import { addStudent, getStudents, deleteStudent, addCourse, deleteCourseFromStudent } from "./studentControl";

studentRouter.post("/add-student", addStudent).get("/get-students", getStudents).delete("/delete-student", deleteStudent).post("/add-course", addCourse).delete("/delete-course", deleteCourseFromStudent)

export default studentRouter;