"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var teachersControl_1 = require("./teachersControl");
router
    .post("/add-Teacher", teachersControl_1.addTeacher)
    .put("/update-Teacher", teachersControl_1.updateTeacher)
    .get("/get-Teachers", teachersControl_1.getTeachers)
    .patch("/update-Teacher-name", teachersControl_1.updateTeacherName)["delete"]("/delete-Teacher", teachersControl_1.deleteTeacher);
exports["default"] = router;
