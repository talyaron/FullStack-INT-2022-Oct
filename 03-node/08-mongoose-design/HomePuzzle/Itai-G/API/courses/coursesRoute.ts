import express from "express";
import { addCourse, updateCourse, deleteCourse } from "./coursesControl";


const router = express.Router();

router
.post('/add-course',addCourse)
.put('/update-course',updateCourse)
.delete('/delete-course', deleteCourse)


export default router;


