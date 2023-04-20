"use strict";
exports.__esModule = true;
exports.ExamResultSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
//Scheme
exports.ExamResultSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    passMark: {
        type: Number,
        required: true,
        "default": 50
    },
    status: {
        type: String,
        required: true,
        "enum": ["failed", "passed"],
        "default": "failed"
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: "Subject"
    }
});
//Model
var ExamResultModel = mongoose_1["default"].model('courses', exports.ExamResultSchema);
exports["default"] = ExamResultModel;
