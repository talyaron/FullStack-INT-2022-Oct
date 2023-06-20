import { Router } from "express";
import { addFeedBack, getFeedBacks } from "./feedbackControl";

const router = Router();

router.post("/add-feedback", addFeedBack);
router.get("/get-feedbacks", getFeedBacks);

export default router;
