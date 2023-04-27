"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControl_1 = require("./gradesControl");
router
    .post("/create-grade", gradesControl_1.createGrade);
exports["default"] = router;
