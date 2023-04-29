"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var examsControle_1 = require("./examsControle");
router
    .post("/create-exam", examsControle_1.createExam)
    .get("/get-exams", examsControle_1.getExams);
exports["default"] = router;
