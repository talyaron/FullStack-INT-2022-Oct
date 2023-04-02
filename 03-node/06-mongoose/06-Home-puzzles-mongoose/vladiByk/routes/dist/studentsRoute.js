"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var router = express_1["default"].Router();
exports.router = router;
var studentsControl_1 = require("../controller/studentsControl");
router.route("/").get(studentsControl_1.getAllStudents).post(studentsControl_1.createStudent);
router.route("/:id").get(studentsControl_1.getStudent).patch(studentsControl_1.updateStudent)["delete"](studentsControl_1.deleteStudent);
