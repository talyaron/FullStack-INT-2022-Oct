import express from "express";
const courseRouter = express.Router();

import isLogin from "../../middlewares/isLogin";
import isAdmin from "../../middlewares/isAdmin";

import 
    { 
        createCourse, 
        getAllcourses,
        getCourse,
        updateCourse,
        deleteCourse
    } from "./coursesControl"

courseRouter
    .route("/")
    .post(isLogin, isAdmin, createCourse)
    .get(getAllcourses)

courseRouter
    .route("/:id")
    .get(getCourse)
    .put(updateCourse)
    .delete(deleteCourse)

export default courseRouter