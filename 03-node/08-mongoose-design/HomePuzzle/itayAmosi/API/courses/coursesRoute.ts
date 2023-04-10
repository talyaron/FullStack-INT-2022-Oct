import express from "express";
const router = express.Router();

import {
    addMockCourse,
} from "./coursesControle";


router
.post("/add-mock-course", addMockCourse)

export default router;