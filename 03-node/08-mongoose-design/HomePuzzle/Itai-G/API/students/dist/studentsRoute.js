"use strict";
exports.__esModule = true;
var express_1 = require("express");
var studentsControl_1 = require("./studentsControl");
var router = express_1["default"].Router();
router
    .post('/add-student', studentsControl_1.addStudent)
    .get('/get-students', studentsControl_1.getStudents)
    .patch('/update-student-name', studentsControl_1.updateStudentName)["delete"]('/delete-student', studentsControl_1.deleteStudent)
    .get('/get-select', studentsControl_1.getstudentsforselect);
exports["default"] = router;
