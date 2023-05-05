"use strict";
exports.__esModule = true;
var express_1 = require("express");
var LogInrouter = express_1["default"].Router();
var userControls_1 = require("./userControls");
LogInrouter.post("/add-user", userControls_1.addUser).post("/log-in", userControls_1.logIn).get("/user-from-cookie", userControls_1.getUserFromCokkie);
exports["default"] = LogInrouter;
