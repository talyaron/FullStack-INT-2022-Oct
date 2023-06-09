"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var playersControl_1 = require("./playersControl");
router
    .post("/add-players", playersControl_1.addPlayer)["delete"]("/delete-player", playersControl_1.deletePlayer)
    .get("/get-players", playersControl_1.getPlayer)
    .patch("/update-player-name", playersControl_1.updatePlayerName);
exports["default"] = router;
