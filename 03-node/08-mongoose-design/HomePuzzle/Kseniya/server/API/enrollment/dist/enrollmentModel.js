"use strict";
exports.__esModule = true;
exports.enrollmentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.enrollmentSchema = new mongoose_1.Schema({
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Course'
    },
    student: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Student'
    }
});
var Enrollment = mongoose_1["default"].model('Enrollment', exports.enrollmentSchema);
