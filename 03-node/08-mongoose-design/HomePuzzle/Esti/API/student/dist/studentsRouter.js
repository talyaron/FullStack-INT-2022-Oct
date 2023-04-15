"use strict";
exports.__esModule = true;
var express_1 = require("express");
var studentsControl_1 = require("./studentsControl");
var routeStudents = express_1["default"].Router();
routeStudents.post('/create-new-students', studentsControl_1.createNewStudent);
exports["default"] = routeStudents;
