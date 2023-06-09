import express from "express";
import { addExam} from "./exmsControl";
const router = express.Router();


router
.post("/create-exam",addExam)

export default router;
