import express from "express";
const router = express.Router();

import {
    getStudentGradesInCourse,
} from "./gradesControle";


router

  .get("/get-students", getStudentGradesInCourse)


export default router;