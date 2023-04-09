"use strict";
exports.__esModule = true;
exports.studentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    name: String,
    age: Number
});
var studentModel = mongoose_1["default"].model("student", exports.studentSchema);
exports["default"] = studentModel;
