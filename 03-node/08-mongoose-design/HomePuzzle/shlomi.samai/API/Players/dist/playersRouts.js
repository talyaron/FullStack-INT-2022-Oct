"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var playerControls_1 = require("./playerControls");
router
    .post("/add-players", playerControls_1.addPlayer)
    .post("/API/Teams/hendle-Get-Teams-Of-Player", playerControls_1.hendleGetTeamsOfPlayer)["delete"]("/delete-player", playerControls_1.deletPlayer)
    .get("/get-players", playerControls_1.getPlayer)
    .patch("/update-player-name", playerControls_1.updatePlayer);
exports["default"] = router;
