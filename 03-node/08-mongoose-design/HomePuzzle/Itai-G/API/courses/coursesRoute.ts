import express from "express";
import { addCourse, updateCourse, deleteCourse } from "./coursesControl";


const router = express.Router();

router.post('/add-course',addCourse);
router.put('/update-course',updateCourse);
router.delete('./delete',deleteCourse);


export default router;


