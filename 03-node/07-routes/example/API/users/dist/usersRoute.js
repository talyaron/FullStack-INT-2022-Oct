"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControls_1 = require("./usersControls");
router
    .post("/add-user", usersControls_1.addUser)
    .put("/update-user", usersControls_1.updateUser)
    .get("/get-users", usersControls_1.getUsers)
    .patch("/update-user-name", usersControls_1.updateUserName)["delete"]("/delete-user", usersControls_1.deleteUser);
exports["default"] = router;
