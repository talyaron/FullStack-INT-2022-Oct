"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControl_1 = require("./gradesControl");
router
    .get('/all', gradesControl_1.getGrades)
    .post("/add", gradesControl_1.addGrade)["delete"]("/delete", gradesControl_1.deleteGrade);
exports["default"] = router;
