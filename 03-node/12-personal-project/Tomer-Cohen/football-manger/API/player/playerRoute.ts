import express from "express";
const router = express.Router();
import {
getPlayers,
addPlayer,
deletePlayer,
updatePlayerType,
getPlayer
} from "./playerControle";

router
.get("/get-players",getPlayers)
.post("/add-player",addPlayer)
.delete("/delete-player",deletePlayer)
.patch("/update-player-type",updatePlayerType)
.get("/get-player",getPlayer)

export default router;