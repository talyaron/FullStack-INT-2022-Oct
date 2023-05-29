"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var playersAndTeamsControl_1 = require("./playersAndTeamsControl");
router.get('/create-Player-And-Team', playersAndTeamsControl_1.createPlayerAndTeam);
exports["default"] = router;
