import express from "express";
const router = express.Router();

import {
    addMockTeacher,
} from "./teachersControle";


router
  .post("/add-mock-teacher", addMockTeacher)

export default router;