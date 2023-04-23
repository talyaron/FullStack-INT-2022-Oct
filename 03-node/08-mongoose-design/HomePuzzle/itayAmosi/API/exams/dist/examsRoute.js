"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var examsControle_1 = require("./examsControle");
router
    .post("/add-mock-exam", examsControle_1.addMockExam);
exports["default"] = router;
