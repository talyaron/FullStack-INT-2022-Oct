"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userControlls_1 = require("./userControlls");
router
    .get("/get-user", userControlls_1.getUsers)
    .post("/add-user", userControlls_1.addUser);
exports["default"] = router;
