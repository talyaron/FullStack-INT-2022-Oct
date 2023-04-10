import express from "express";
const router = express.Router();

import {
    addMockTeacher,
    getTeacher,
} from "./teachersControle";


router
  .post("/add-mock-teacher", addMockTeacher)
  .get("/get-teachers", getTeacher)
export default router;