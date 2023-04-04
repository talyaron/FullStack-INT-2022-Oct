"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var studentsControle_1 = require("./studentsControle");
router
    .post("/add-student-grades", studentsControle_1.addStudentGrades)
    .post("/add-mock-student", studentsControle_1.addMockStudent)
    .get("/get-students", studentsControle_1.getStudents)["delete"]("/delete-student", studentsControle_1.deleteStudent)
    .patch("/update-student-name", studentsControle_1.updateStudentName);
exports["default"] = router;
