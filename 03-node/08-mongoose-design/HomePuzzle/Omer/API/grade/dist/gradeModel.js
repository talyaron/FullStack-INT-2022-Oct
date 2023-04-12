"use strict";
exports.__esModule = true;
exports.gradeScheme = void 0;
var mongoose_1 = require("mongoose");
exports.gradeScheme = new mongoose_1["default"].Schema({
    courseName: String,
    gradeNum: Number
});
var gradeModel = mongoose_1["default"].model('grade', exports.gradeScheme);
exports["default"] = gradeModel;
