import express from "express";
const router = express.Router();

import {
    addMockCourse,
    getCoursesByIds,
} from "./coursesControle";


router
.post("/add-mock-course", addMockCourse)
.get("/get-courses-by-ids", getCoursesByIds)

export default router;