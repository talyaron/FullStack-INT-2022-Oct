import express from "express";
const router = express.Router();
import {
  getAllStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent,
} from "../controller/studentsControl";

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

// module.exports = router;
export { router };
