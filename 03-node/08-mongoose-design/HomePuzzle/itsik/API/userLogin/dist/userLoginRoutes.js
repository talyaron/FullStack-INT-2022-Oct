"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userLoginControlls_1 = require("./userLoginControlls");
router.post("/signUp", userLoginControlls_1.addUser);
exports["default"] = router;
