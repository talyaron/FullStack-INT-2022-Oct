import express from "express";
const router = express.Router();
import { getAllStudents, createStudent, deleteStudent } from "../controller/studentsControl";

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").delete(deleteStudent);

// module.exports = router;
export { router };
