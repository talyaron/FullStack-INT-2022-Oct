"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.GradeSchema = new mongoose_1.Schema({
    grade: Number,
    userId: String,
    courseId: String,
    examId: String
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
