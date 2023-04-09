"use strict";
exports.__esModule = true;
exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var teachersModel_1 = require("../teachers/teachersModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String,
    teacher: teachersModel_1["default"]
});
var CourseModel = mongoose_1["default"].model('courses', exports.CourseSchema);
exports["default"] = CourseModel;
