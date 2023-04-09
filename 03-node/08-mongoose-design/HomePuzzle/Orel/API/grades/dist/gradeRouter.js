"use strict";
exports.__esModule = true;
var express_1 = require("express");
var gradesRoute = express_1["default"].Router();
var gradesControl_1 = require("./gradesControl");
gradesRoute
    .post("/add-grade", gradesControl_1.addGrade)
    .put("/update-grade", gradesControl_1.updateGrade)
    .get("/get-grades", gradesControl_1.getGrades)
    .patch("/update-grade-name", gradesControl_1.updateGradeName)["delete"]("/delete-grade", gradesControl_1.deleteGrade);
exports["default"] = gradesRoute;
