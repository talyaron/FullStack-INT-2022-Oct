import express from "express";
const studentRouter = express.Router();

import { addStudent, getStudents, deleteStudent, addCourse } from "./studentControl";

studentRouter.post("/add-student", addStudent).get("/get-students", getStudents).delete("/delete-student", deleteStudent).post("/add-course", addCourse)

export default studentRouter;