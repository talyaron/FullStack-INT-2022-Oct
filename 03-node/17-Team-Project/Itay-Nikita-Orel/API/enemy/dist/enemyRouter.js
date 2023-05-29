"use strict";
exports.__esModule = true;
var express_1 = require("express");
var enemyControl_1 = require("./enemyControl");
var userMiddlwares_1 = require("../users/userMiddlwares");
var enemyRouter = express_1.Router();
enemyRouter
    .get("/get-enemies", userMiddlwares_1.adminAccess, enemyControl_1.getEnemies)
    .post("/create-enemy", userMiddlwares_1.adminAccess, enemyControl_1.createEnemy)["delete"]("/delete-enemy", userMiddlwares_1.adminAccess, enemyControl_1.deleteEnemy);
exports["default"] = enemyRouter;
