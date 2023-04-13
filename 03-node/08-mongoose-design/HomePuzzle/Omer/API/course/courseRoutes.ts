import express from "express";
const courseRouter = express.Router();

import { addCourse, getCourses, deleteCourse } from "./courseControl";

courseRouter.post("/add-course", addCourse).get("/get-courses", getCourses).delete("/delete-course", deleteCourse)

export default courseRouter;