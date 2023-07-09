"use strict";
exports.__esModule = true;
var express_1 = require("express");
var UserControl_1 = require("./UserControl");
var router = express_1["default"].Router();
router
    .get("/user", UserControl_1.getUser)
    .get("/", UserControl_1.getUsers)
    .patch("/:userId", UserControl_1.updateUser)["delete"]("/:userId", UserControl_1.deleteUser);
exports["default"] = router;
