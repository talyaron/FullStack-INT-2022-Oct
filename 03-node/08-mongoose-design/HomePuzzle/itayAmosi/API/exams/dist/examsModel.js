"use strict";
exports.__esModule = true;
exports.ExamStudentSchema = exports.ExamSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var studentsModel_1 = require("../students/studentsModel");
exports.ExamSchema = new mongoose_1.Schema({
    name: String,
    topic: String,
    questions: Object,
    courseId: String
});
exports.ExamStudentSchema = new mongoose_1.Schema({
    student: studentsModel_1.StudentSchema,
    exam: exports.ExamSchema,
    course: coursesModel_1.CourseSchema,
    grade: Number
});
var ExamModel = mongoose_1["default"].model("exams", exports.ExamSchema);
// export const ExamStudentModel = mongoose.model("exam-students", ExamStudentSchema);
exports["default"] = ExamModel;
