"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.GradeSchema = new mongoose_1.Schema({
    grade: Number,
    studentId: String,
    courseId: String
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
