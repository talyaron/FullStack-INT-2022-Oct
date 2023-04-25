
import express from "express";

const router = express.Router();
import{createGrade} from "./gradesControl"
router

.post("/create-grade",createGrade)

export default router;