import express from "express";
const router = express.Router();

import { createExam } from "./examsControle";

router
.post("/create-exam", createExam);

export default router;
