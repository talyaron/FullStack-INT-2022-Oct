"use strict";
exports.__esModule = true;
exports.courseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.courseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    students: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]
});
var CourseModel = mongoose_1["default"].model("Course", exports.courseSchema);
exports["default"] = CourseModel;
