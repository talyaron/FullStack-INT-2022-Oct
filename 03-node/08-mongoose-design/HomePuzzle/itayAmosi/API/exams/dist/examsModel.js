"use strict";
exports.__esModule = true;
exports.ExamSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
exports.ExamSchema = new mongoose_1.Schema({
    name: String,
    topic: String,
    questions: Object,
    course: coursesModel_1.CourseSchema
});
// export const ExamStudentSchema = new Schema({
//   student: StudentSchema,
//   exam: ExamSchema,
//   course: CourseSchema,
//   grade: Number,
// });
var ExamModel = mongoose_1["default"].model("exams", exports.ExamSchema);
// export const ExamStudentModel = mongoose.model("exam-students", ExamStudentSchema);
exports["default"] = ExamModel;
