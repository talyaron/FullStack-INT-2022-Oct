"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControl_1 = require("./usersControl");
router
    .post("/create-user", usersControl_1.createUser)
    .get("/get-user", usersControl_1.getUser)
    .post("/login", usersControl_1.login);
exports["default"] = router;
