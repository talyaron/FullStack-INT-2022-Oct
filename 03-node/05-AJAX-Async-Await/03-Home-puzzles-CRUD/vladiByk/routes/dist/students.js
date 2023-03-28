"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var router = express_1["default"].Router();
exports.router = router;
var students_1 = require("../controller/students");
router.route("/").get(students_1.getAllStudents).post(students_1.createStudent);
