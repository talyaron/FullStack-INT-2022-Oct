import express from "express";
const router = express.Router();

import {
    createCourse,
    getCourses,
} from "./coursesControle";


router
.post("/create-course", createCourse)
.get("/get-courses", getCourses)

export default router;