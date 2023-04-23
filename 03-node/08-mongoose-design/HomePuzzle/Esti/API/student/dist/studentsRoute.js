"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var studentsControl_1 = require("./studentsControl");
router
    .post("/add-Student", studentsControl_1.addStudent)
    .put("/update-Student", studentsControl_1.updateStudent)
    .get("/get-Students", studentsControl_1.getStudents)
    .patch("/update-Student-name", studentsControl_1.updateStudentName)["delete"]("/delete-Student", studentsControl_1.deleteStudent);
exports["default"] = router;
