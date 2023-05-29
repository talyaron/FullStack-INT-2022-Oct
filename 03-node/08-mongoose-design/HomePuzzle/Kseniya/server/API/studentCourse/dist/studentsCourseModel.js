"use strict";
exports.__esModule = true;
exports.StudentCourseSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../../../../../../mongoose-joins/example/API/courses/coursesModel");
var studentsModel_1 = require("../students/studentsModel");
exports.StudentCourseSchema = new mongoose_1.Schema({
    student: studentsModel_1.StudentSchema,
    course: coursesModel_1.CourseSchema
});
var StudentCourseModel = mongoose_1["default"].model("studentCourse", exports.StudentCourseSchema);
exports["default"] = StudentCourseModel;
