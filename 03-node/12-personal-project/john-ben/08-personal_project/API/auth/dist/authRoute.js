"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authControl_1 = require("./authControl");
var router = express_1["default"].Router();
router
    .post("/login", authControl_1.login)
    .post('/register', authControl_1.register);
exports["default"] = router;
