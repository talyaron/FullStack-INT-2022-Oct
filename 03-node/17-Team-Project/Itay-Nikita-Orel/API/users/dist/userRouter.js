"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userControl_1 = require("./userControl");
var userMiddlwares_1 = require("./userMiddlwares");
var userRouter = express_1.Router();
userRouter
    .get("/get-users", userControl_1.getUsers)
    .get("/get-users-score", userControl_1.getUsersScoer)
    .post("/create-user", userControl_1.createUser)
    .post("/restore-password", userControl_1.restorePassword)
    .post("/admin-create-user", userMiddlwares_1.adminAccess, userControl_1.adminCreateUser)
    .post("/login", userControl_1.login)
    .put("/update-user", userControl_1.UpdateUserDetails)
    .get("/get-user", userControl_1.getUser)
    .get("/get-user-resolution", userControl_1.getUserResolution)
    .post("/set-user-resolution", userControl_1.setUserResolution)["delete"]("/delete-user", userControl_1.deleteUser)
    .get("/delete-cookie", userControl_1.logout)
    .patch('/change-icon', userControl_1.changeUserIcon);
exports["default"] = userRouter;
