import express from "express";
import { addCourse, updateCourse, deleteCourse,createCourse } from "./coursesControl";


const router = express.Router();
router
.post('/createCourse',createCourse)
.post('/add-course',addCourse)
.put('/update-course',updateCourse)
.delete('./delete',deleteCourse);


export default router;


