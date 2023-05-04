"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRouter = express_1["default"].Router();
var userControls_1 = require("./userControls");
userRouter.post("/add-user", userControls_1.addUser).post("/logIn", userControls_1.logIn).get("/getUser-for-logIn", userControls_1.userFromcookies);
exports["default"] = userRouter;
