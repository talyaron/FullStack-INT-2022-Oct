"use strict";
exports.__esModule = true;
exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CourseSchema = new mongoose_1.Schema({
    name: String
});
var CourseModel = mongoose_1.model('Course', exports.CourseSchema);
exports["default"] = CourseModel;
