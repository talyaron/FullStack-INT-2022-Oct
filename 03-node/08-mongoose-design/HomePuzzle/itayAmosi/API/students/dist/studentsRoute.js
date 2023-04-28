"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var studentsControle_1 = require("./studentsControle");
router
    .post("/create-student", studentsControle_1.createStudent)
    .get("/get-students", studentsControle_1.getStudents)["delete"]("/delete-student", studentsControle_1.deleteStudent)
    .patch("/update-student-name", studentsControle_1.updateStudentName)
    .post("/get-grades-student", studentsControle_1.getGradesByStudentId);
exports["default"] = router;
