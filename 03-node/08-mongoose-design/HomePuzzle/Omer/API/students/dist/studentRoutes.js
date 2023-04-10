"use strict";
exports.__esModule = true;
var express_1 = require("express");
var studentRouter = express_1["default"].Router();
var studentControl_1 = require("./studentControl");
studentRouter.post("/add-student", studentControl_1.addStudent).get("/get-students", studentControl_1.getStudents)["delete"]("/delete-student", studentControl_1.deleteStudent).post("/add-course", studentControl_1.addCourse)["delete"]("/delete-course", studentControl_1.deleteCourseFromStudent);
exports["default"] = studentRouter;
