import {Router} from "express";
import { createGame, getGameCoins, getGameWaveCount, getGames, getTotalGamesPlayed, getTowers, increaseHighscore } from "./gameControl";
import { adminAccess } from "../users/userMiddlwares";


const gameRouter = Router()

gameRouter
.get("/get-games" , getGames )
.get("/create-game" , createGame)
.get("/get-game-coins" , getGameCoins)
.get("/get-game-wave-count" , getGameWaveCount)
.get("/get-towers" , getTowers)
.get("/get-total-games-played", adminAccess, getTotalGamesPlayed)
.post("/increase-highscore" , increaseHighscore )


export default gameRouter