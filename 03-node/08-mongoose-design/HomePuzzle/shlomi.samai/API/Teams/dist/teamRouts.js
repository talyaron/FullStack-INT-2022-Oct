"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var teamsControl_1 = require("./teamsControl");
router
    .post("/add-players", teamsControl_1.addPlayer)["delete"]("/delete-player", teamsControl_1.deletePlayer)
    .get("/get-players", teamsControl_1.getPlayer)
    .patch("/update-player-name", teamsControl_1.updatePlayerName);
exports["default"] = router;
