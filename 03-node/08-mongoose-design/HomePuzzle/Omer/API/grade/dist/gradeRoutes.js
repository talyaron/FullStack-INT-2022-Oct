"use strict";
exports.__esModule = true;
var express_1 = require("express");
var gradeRouter = express_1["default"].Router();
var gradeControl_1 = require("./gradeControl");
gradeRouter.post("/add-grade", gradeControl_1.addGrade)["delete"]("/delete-grade", gradeControl_1.deleteGrade).post("/add-grade-toStudent", gradeControl_1.addGradeToStudent)["delete"]("/delete-allGrades", gradeControl_1.deleteAllGrades)["delete"]("/delete-gradeStudent", gradeControl_1.deleteGradeFromStudent);
exports["default"] = gradeRouter;
