import express from "express";
const courseRouter = express.Router();

import { addCourse } from "./courseControl";

courseRouter.post("/add-course", addCourse)

export default courseRouter;