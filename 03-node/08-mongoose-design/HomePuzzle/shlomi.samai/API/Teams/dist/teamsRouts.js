"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var teamsControl_1 = require("./teamsControl");
router
    .post("/add-team", teamsControl_1.addTeam)["delete"]("/delete-team", teamsControl_1.deletTeam)
    .get("/get-teams", teamsControl_1.getTeam)
    .patch("/update-team-name", teamsControl_1.updateTeam);
exports["default"] = router;
