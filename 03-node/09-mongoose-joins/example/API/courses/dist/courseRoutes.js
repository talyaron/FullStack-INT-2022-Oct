"use strict";
exports.__esModule = true;
var express_1 = require("express");
var courseControler_1 = require("./courseControler");
var router = express_1["default"].Router();
router.post('/create-course', courseControler_1.createCourse)
    .post('/create-exam', courseControler_1.createExam)
    .post('/create-grade', courseControler_1.createGrade)
    .get('/get-student-course-grades', courseControler_1.getStudentGradesInCourse);
exports["default"] = router;
