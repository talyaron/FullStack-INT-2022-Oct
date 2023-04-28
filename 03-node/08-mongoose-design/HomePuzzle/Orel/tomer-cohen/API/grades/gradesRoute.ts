import express from "express";
const router = express.Router();


import{
addMockGrades,
getGrade
}from "./gradesControle";

router
.post("/add-mock-grades",addMockGrades)
.get("/get-grade",getGrade)

export default router