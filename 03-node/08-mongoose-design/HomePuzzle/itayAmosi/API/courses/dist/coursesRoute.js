"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var coursesControle_1 = require("./coursesControle");
router
    .post("/create-course", coursesControle_1.createCourse)
    .get("/get-courses", coursesControle_1.getCourses)
    .get("/get-student-course-grades", coursesControle_1.getStudentGradesInCourse);
exports["default"] = router;
