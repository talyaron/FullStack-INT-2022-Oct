
import express from "express";
const gradesRoute = express.Router();
import {
  addGrade,
  getGrades,
  updateGrade,
  deleteGrade,
} from "./gradesControl";

gradesRoute
  .post("/add-grade", addGrade)
  .get("/get-grades", getGrades)
  .patch("/update-grade-score", updateGrade)
  .delete("/delete-grade", deleteGrade);

export default gradesRoute;
