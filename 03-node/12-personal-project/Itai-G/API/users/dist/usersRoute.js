"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControl_1 = require("./usersControl");
router
    .post("/add-user", usersControl_1.addUser)
    .post("/login", usersControl_1.login)
    .get("/get-users", usersControl_1.getUsers);
exports["default"] = router;
