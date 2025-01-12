"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gradesControl_1 = require("./gradesControl");
router
    .post("/add-grade", gradesControl_1.addGrade)
    .patch("/update-grade", gradesControl_1.updateGrade)["delete"]("/delete-grade", gradesControl_1.deleteGrade);
exports["default"] = router;
