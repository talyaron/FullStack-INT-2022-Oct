"use strict";
exports.__esModule = true;
exports.studentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});
var StudentModel = mongoose_1["default"].model("Student", exports.studentSchema);
exports["default"] = StudentModel;
