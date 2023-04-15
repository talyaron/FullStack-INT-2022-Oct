"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var studentsControls_1 = require("./studentsControls");
router
    .post("/add-student", studentsControls_1.addStudent)
    .put("/update-student", studentsControls_1.updateStudent)
    .get("/get-students", studentsControls_1.getStudents)
    .patch("/update-student-name", studentsControls_1.updateStudentName)["delete"]("/delete-student", studentsControls_1.deleteStudent);
exports["default"] = router;
