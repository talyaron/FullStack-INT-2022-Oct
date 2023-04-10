import express from "express";
const router = express.Router();

import {
    addMockCourse,
    getCourse,
} from "./coursesControle";


router
.post("/add-mock-course", addMockCourse)
.get("/get-course", getCourse)

export default router;