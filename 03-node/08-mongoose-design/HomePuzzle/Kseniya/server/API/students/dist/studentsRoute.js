"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var studentsControl_1 = require("./studentsControl");
router
    .post("/add", studentsControl_1.addStudent)
    .get("/all", studentsControl_1.getStudents)
    .patch("/update-student-name", studentsControl_1.updateStudentName)["delete"]("/delete/:_id", studentsControl_1.deleteStudent);
exports["default"] = router;
