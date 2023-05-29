import express from "express";
const router = express.Router();
import {
getGames,
addGame,
deleteGame,
getGame
} from "./gameControle";


router
.get("/get-games", getGames)
.post("/add-game",addGame)
.delete("/delete-game",deleteGame)
.get("/get-game",getGame)

export default router;