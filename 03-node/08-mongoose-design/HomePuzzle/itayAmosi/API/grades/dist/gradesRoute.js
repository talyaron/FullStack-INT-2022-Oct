"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControle_1 = require("./gradesControle");
router
    .post("/add-mock-grades", gradesControle_1.addMockGrades)
    .get("/get-grades", gradesControle_1.getGradesByStudentId);
exports["default"] = router;
