"use strict";
exports.__esModule = true;
var express_1 = require("express");
var footballPlayersControl_1 = require("./footballPlayersControl");
var router = express_1.Router();
router.post("/add-footballPlayer", footballPlayersControl_1.addfootballPlayer).get("/get-footballPlayers", footballPlayersControl_1.getFootballPlayers);
exports["default"] = router;
