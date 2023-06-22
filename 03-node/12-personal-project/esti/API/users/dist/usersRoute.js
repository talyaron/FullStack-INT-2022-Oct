"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userControl_1 = require("./userControl");
router
    .post("/add-user", userControl_1.addUser)
    .put("/update-user", userControl_1.updateUser)
    .get("/get-users", userControl_1.getUsers)
    .patch("/update-user-name", userControl_1.updateUserName)["delete"]("/delete-user", userControl_1.deleteUser)
    .patch('/update-user-type', userControl_1.updateUserType)
    .post('/login', userControl_1.login)
    .get('/get-user', userControl_1.getUser);
exports["default"] = router;
