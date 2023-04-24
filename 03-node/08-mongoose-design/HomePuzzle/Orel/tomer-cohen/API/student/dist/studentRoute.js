"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var studentControle_1 = require("./studentControle");
router
    .post("/add-mock-student", studentControle_1.addMockStudent)
    .get("/get-students", studentControle_1.getStudents)["delete"]("/delete-student", studentControle_1.deleteStudent)
    .patch("/update-student-name", studentControle_1.updateStudentName);
exports["default"] = router;
