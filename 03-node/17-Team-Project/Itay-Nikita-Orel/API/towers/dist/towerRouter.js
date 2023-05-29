"use strict";
exports.__esModule = true;
var express_1 = require("express");
var towerControl_1 = require("./towerControl");
var userMiddlwares_1 = require("../users/userMiddlwares");
var towerRouter = express_1.Router();
towerRouter
    .get("/get-towers", userMiddlwares_1.adminAccess, towerControl_1.getTowers)
    .post("/create-tower", userMiddlwares_1.adminAccess, towerControl_1.createTower)["delete"]("/delete-tower", userMiddlwares_1.adminAccess, towerControl_1.deleteTower);
exports["default"] = towerRouter;
