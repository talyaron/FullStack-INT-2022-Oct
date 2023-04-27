import express from "express";
const router = express.Router();

import {
    createExam,
     getExams, 
    } from "./examsControle";

router

.post("/create-exam", createExam)
.get("/get-exams", getExams)

export default router;
