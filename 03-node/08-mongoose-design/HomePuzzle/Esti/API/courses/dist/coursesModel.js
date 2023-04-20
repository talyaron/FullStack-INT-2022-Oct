"use strict";
exports.__esModule = true;
exports.CoursesSchema = void 0;
var mongoose_1 = require("mongoose");
var teachersModel_1 = require("../teachers/teachersModel");
exports.CoursesSchema = new mongoose_1.Schema({
    name: String,
    teacher: teachersModel_1.TeachersSchema
});
var CoursesModel = mongoose_1["default"].model('courses', exports.CoursesSchema);
exports["default"] = CoursesModel;
