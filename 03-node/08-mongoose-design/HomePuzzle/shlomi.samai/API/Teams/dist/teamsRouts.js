"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var teamsControl_1 = require("./teamsControl");
router.post('/create-team', teamsControl_1.createTeam);
exports["default"] = router;
