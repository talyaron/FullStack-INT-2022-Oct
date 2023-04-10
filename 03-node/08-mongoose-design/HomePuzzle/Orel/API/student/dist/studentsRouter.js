"use strict";
exports.__esModule = true;
var express_1 = require("express");
var studentsControl_1 = require("./studentsControl");
var routeStudent = express_1["default"].Router();
routeStudent.post('/create-new-student', studentsControl_1.createNewStudent);
exports["default"] = routeStudent;
