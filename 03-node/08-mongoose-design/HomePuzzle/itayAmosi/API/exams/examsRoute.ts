import express from "express";
const router = express.Router();

import { addMockExam } from "./examsControle";

router
.post("/add-mock-exam", addMockExam);

export default router;
