import express from "express";
const courseRouter = express.Router();

import { addCourse, getCourses } from "./courseControl";

courseRouter.post("/add-course", addCourse).get("/get-courses", getCourses)

export default courseRouter;