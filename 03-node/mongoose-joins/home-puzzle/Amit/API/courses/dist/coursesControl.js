"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getStudentGradesInCourse = exports.deleteCourse = exports.updateCourse = exports.addCourse = void 0;
var coursesModel_1 = require("./coursesModel");
var studentsModel_1 = require("../students/studentsModel");
exports.addCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, course, studentId, _student, courseDB, courseStudentConnection, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, course = _a.course, studentId = _a.studentId;
                return [4 /*yield*/, studentsModel_1["default"].findById(studentId)];
            case 1:
                _student = _b.sent();
                if (!_student)
                    throw new Error("no student found");
                if (!course)
                    throw new Error("No course found");
                return [4 /*yield*/, coursesModel_1["default"].create({ name: course })];
            case 2:
                courseDB = _b.sent();
                return [4 /*yield*/, coursesModel_1.CourseStudentModel.create({ student: _student, course: courseDB })];
            case 3:
                courseStudentConnection = _b.sent();
                // await _student.save();
                // const students = await StudentModel.find({})
                console.log("courseStudentConnection", courseStudentConnection);
                // res.status(201).send({ ok: true, students });
                res.status(201).send({ ok: true });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const { courseId, studentId, updatedCourse } = req.body;
            // if (!courseId) throw new Error("No course Id in data");
            // if (!studentId) throw new Error("No student Id in data");
            // if (!updatedCourse) throw new Error("No updated Course in data");
            // const student = await StudentModel.findById(studentId);
            // if (!student) throw new Error("no student found");
            // const course = await CourseModel.findById(courseId);
            // if (!course) throw new Error("no course found");
            // const updatedCourseDB = await CourseModel.updateOne({ courseId }, { name: updatedCourse });
            // const _course = student.courses.find((course) => course._id?.toString() === courseId.toString())
            // if (!_course) throw new Error("_course not found")
            // _course.name = updatedCourse;
            // await student.save();
            // const students = await StudentModel.find({})
            // res.send({ ok: true, students });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.deleteCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const { courseId, studentId } = req.body;
            // const student = await StudentModel.findById(studentId);
            // if (!student) throw new Error("no student found");
            // const course = await CourseModel.findById(courseId);
            // if (!course) throw new Error("no course found");
            // const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
            // if ((!courseIndex) && (courseIndex !== 0)) throw new Error("course Index not found");
            // student.courses.splice(courseIndex, 1);
            // await student.save();
            // const students = await StudentModel.find({})
            // res.send({ ok: true, students });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.getStudentGradesInCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const { name: courseName } = req.query;
            // const gradesInCourse: {student: Student, grades:Grade[]}[] = [];
            // for await (const student of StudentModel.find()) {
            //   console.log("student", student);
            //   const matchingCourse = student.courses.find((c) => c.name === courseName);
            //   console.log("matchingCourse", matchingCourse);
            //   console.log("courseName", courseName);
            //   if (!matchingCourse) continue
            //   gradesInCourse.push({
            //     student: student,
            //     grades: matchingCourse.grades,
            //   })
            // }
            // console.log("gradesInCourse", gradesInCourse);
            // res.send({ ok: true, gradesInCourse });
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error);
                res.status(500).send({ error: error.message });
            }
        }
        return [2 /*return*/];
    });
}); };
//https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html
