import express from "express";
const gradeRouter = express.Router();
import {
  getAllGrades,
  getGrade,
  createGrade,
  deleteGrade,
  updateGrade,
} from "../controllers/gradeController";

gradeRouter.route("/").get(getAllGrades).post(createGrade);
gradeRouter.route("/:id").get(getGrade).patch(updateGrade).delete(deleteGrade);

// module.exports = gradeRouter;
export { gradeRouter };
