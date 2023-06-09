import express from "express";
const playerRouter = express.Router();

import {
  getAllPlayers,
  createPlayer,
  getAllPlayersInGame,
  deleteAllPlayers,
  updatePlayer,
} from "../controller/playerController";

playerRouter.route("/").get(getAllPlayers).post(createPlayer)

playerRouter.route("/getGamePlayers").get(getAllPlayersInGame);

playerRouter.route("/deletePlayers").delete(deleteAllPlayers);

playerRouter.route("/updatePlayer").patch(updatePlayer);



export { playerRouter };
