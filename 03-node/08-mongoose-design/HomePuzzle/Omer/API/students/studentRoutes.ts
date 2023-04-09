import express from "express";
const studentRouter = express.Router();

import { addStudent, getStudents, deleteStudent } from "./studentControl";

studentRouter.post("/add-student", addStudent).get("/get-students", getStudents).delete("/delete-student", deleteStudent)

export default studentRouter;