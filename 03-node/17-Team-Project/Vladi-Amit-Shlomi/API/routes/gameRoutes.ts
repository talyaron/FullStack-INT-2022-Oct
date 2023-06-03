import express from "express";
const gameRouter = express.Router();

import {
  createGame,
  deleteAllGames,
  updateGame,
  getUserGames,
  saveGameCookie,
  removeGameCookie,
  deleteGameAndAllRelatedToIt,
  getGame,
} from "../controller/gameController";

gameRouter.route("/").post(createGame);
gameRouter.route("/getUserGames").get(getUserGames);
gameRouter.route("/saveGameCookie").post(saveGameCookie);
gameRouter.route("/removeGameCookie").delete(removeGameCookie);
gameRouter.route("/getGame").get(getGame);
gameRouter.route("/updateGame").patch(updateGame);
gameRouter.route("/deleteThisGame").delete(deleteGameAndAllRelatedToIt);
gameRouter.route("/deleteGames").delete(deleteAllGames);

export { gameRouter };
