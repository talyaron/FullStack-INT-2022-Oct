import express from "express";
const gradeRouter = express.Router();

import { addGrade, deleteGrade, addGradeToStudent, deleteAllGrades, deleteGradeFromStudent } from "./gradeControl";

gradeRouter.post("/add-grade", addGrade).delete("/delete-grade", deleteGrade).post("/add-grade-toStudent", addGradeToStudent).delete("/delete-allGrades", deleteAllGrades).delete("/delete-gradeStudent", deleteGradeFromStudent)

export default gradeRouter;