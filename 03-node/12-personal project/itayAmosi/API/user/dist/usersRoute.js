"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControls_1 = require("./usersControls");
router
    .post("/register", usersControls_1.addUser)
    .post("/login", usersControls_1.login);
exports["default"] = router;
