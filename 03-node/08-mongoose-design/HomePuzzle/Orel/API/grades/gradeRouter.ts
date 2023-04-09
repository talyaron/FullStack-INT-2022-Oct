
import express from "express";
const gradesRoute = express.Router();
import {
  addGrade,
  updateGrade,
  getGrades,
  updateGradeName,
  deleteGrade,
} from "./gradesControl";

gradesRoute
  .post("/add-grade", addGrade)
  .put("/update-grade", updateGrade)
  .get("/get-grades", getGrades)
  .patch("/update-grade-name", updateGradeName)
  .delete("/delete-grade", deleteGrade);

export default gradesRoute;
