"use strict";
exports.__esModule = true;
var express_1 = require("express");
var gradesRoute = express_1["default"].Router();
var gradesControl_1 = require("./gradesControl");
gradesRoute
    .post("/add-grade", gradesControl_1.addGrade)
    .get("/get-grades", gradesControl_1.getGrades)
    .patch("/update-grade-score", gradesControl_1.updateGradeScore)["delete"]("/delete-grade", gradesControl_1.deleteGrade);
exports["default"] = gradesRoute;
