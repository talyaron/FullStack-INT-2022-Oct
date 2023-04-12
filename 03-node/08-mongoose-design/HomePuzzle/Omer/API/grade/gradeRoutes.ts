import express from "express";
const gradeRouter = express.Router();

import { addGrade, deleteGrade } from "./gradeControl";

gradeRouter.post("/add-grade", addGrade).delete("/delete-grade", deleteGrade)

export default gradeRouter;