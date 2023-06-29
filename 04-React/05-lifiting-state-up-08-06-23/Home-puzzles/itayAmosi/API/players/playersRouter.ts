import express from "express";
const router = express.Router();

import { addPlayer, getPlayers } from "./playersControl";

router
    .post("/add-player", addPlayer)
    .get("/get-players", getPlayers)

export default router;
