import express from "express";
const router = express.Router();

import {
  addPlayer,
  deletePlayer,
  getPlayer,
  updatePlayerName,
} from "./playersControl"

router
  .post("/add-players",addPlayer )
  .delete("/delete-player", deletePlayer)
  .get("/get-players", getPlayer)
  .patch("/update-player-name", updatePlayerName)

export default router;