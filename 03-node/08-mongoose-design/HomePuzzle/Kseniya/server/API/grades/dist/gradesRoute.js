"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControl_1 = require("./gradesControl");
router
    .get('/all', gradesControl_1.getGrades)
    .post("/add-grade", gradesControl_1.addGrade)
    .patch("/update-grade-name", gradesControl_1.updateGrade)["delete"]("/delete-grade", gradesControl_1.deleteGrade);
exports["default"] = router;
