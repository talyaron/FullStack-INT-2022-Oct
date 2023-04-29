"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControle_1 = require("./gradesControle");
router
    .post("/add-mock-grades", gradesControle_1.addMockGrades)
    .post("/create-grade", gradesControle_1.createGrade);
exports["default"] = router;
