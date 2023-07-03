import {Router} from "express";
import { addPlayer, getPlayers } from "./playersControle";

const router = Router();

router
.post("/add-player",addPlayer)
.get("/get-players",getPlayers)


export default router