"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControle_1 = require("./gradesControle");
router
    // .get("/get-students", getStudentGradesInCourse)
    .post("/add-mock-grades", gradesControle_1.addMockGrades);
exports["default"] = router;
