"use strict";
exports.__esModule = true;
var express_1 = require("express");
var exmsControl_1 = require("./exmsControl");
var router = express_1["default"].Router();
router
    .post("/create-exam", exmsControl_1.addExam);
exports["default"] = router;
