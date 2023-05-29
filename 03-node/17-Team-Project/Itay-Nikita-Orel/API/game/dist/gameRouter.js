"use strict";
exports.__esModule = true;
var express_1 = require("express");
var gameControl_1 = require("./gameControl");
var userMiddlwares_1 = require("../users/userMiddlwares");
var gameRouter = express_1.Router();
gameRouter
    .get("/get-games", gameControl_1.getGames)
    .get("/create-game", gameControl_1.createGame)
    .get("/get-game-coins", gameControl_1.getGameCoins)
    .get("/get-game-wave-count", gameControl_1.getGameWaveCount)
    .get("/get-towers", gameControl_1.getTowers)
    .get("/get-total-games-played", userMiddlwares_1.adminAccess, gameControl_1.getTotalGamesPlayed)
    .post("/increase-highscore", gameControl_1.increaseHighscore);
exports["default"] = gameRouter;
