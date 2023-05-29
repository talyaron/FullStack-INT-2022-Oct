import express from "express";

const router = express.Router();

import {
  addScore,
  updateScore,
  getScores,
  
} from "./ScoreControl";

router
  .post("/add-Score", addScore)
  .put("/update-Score", updateScore)
  .get("/get-Scores", getScores)

export default router;
