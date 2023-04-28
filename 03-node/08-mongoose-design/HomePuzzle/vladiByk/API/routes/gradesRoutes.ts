import express from "express";
const gradeRouter = express.Router();
import {
  getAllGrades,
  getStudentGradesInCourse,
  createGrade,
  emptyCollection,
  deleteAllGradesInCourse,
  deleteGrade,
  updateGrade,
} from "../controllers/gradeController";

gradeRouter
  .route("/")
  .get(getAllGrades)
  .post(createGrade)
  .delete(emptyCollection);

gradeRouter
  .route("/:id")
  .get(getStudentGradesInCourse)
  .patch(updateGrade)
  .delete(deleteGrade);

gradeRouter
  .route("/inCourse/:courseId").delete(deleteAllGradesInCourse)

// module.exports = gradeRouter;
export { gradeRouter };
