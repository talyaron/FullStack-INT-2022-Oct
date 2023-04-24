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
exports.getStudentGradesInCourse = exports.createGrade = exports.getGradesByStudentId = exports.addMockGrades = void 0;
var coursesModel_1 = require("../courses/coursesModel");
var examsModel_1 = require("../exams/examsModel");
var studentsModel_1 = require("../students/studentsModel");
var gradesModel_1 = require("./gradesModel");
var uuid_1 = require("uuid");
exports.addMockGrades = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newGrades;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, gradesModel_1["default"].create({
                    uid: uuid_1.v4(),
                    grade: 100
                })];
            case 1:
                newGrades = _a.sent();
                res.status(200).send({ ok: true, newGrades: newGrades });
                return [2 /*return*/];
        }
    });
}); };
exports.getGradesByStudentId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var studentId, grades, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                studentId = req.query.studentId;
                return [4 /*yield*/, gradesModel_1["default"].find({ studentId: studentId })];
            case 1:
                grades = _a.sent();
                res.send({ grades: grades });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, grade, studentId, courseId, examId, _b, courseDB, studentDB, examDB, GradeDB;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, grade = _a.grade, studentId = _a.studentId, courseId = _a.courseId, examId = _a.examId;
                return [4 /*yield*/, Promise.all([coursesModel_1["default"].findById(courseId), studentsModel_1["default"].findById(studentId), examsModel_1["default"].findById(examId)])];
            case 1:
                _b = _c.sent(), courseDB = _b[0], studentDB = _b[1], examDB = _b[2];
                if (!courseDB)
                    throw new Error("cant find CourseDB");
                if (!studentDB)
                    throw new Error("cant find studentDB");
                if (!examDB)
                    throw new Error("cant find examDB");
                return [4 /*yield*/, gradesModel_1["default"].create({
                        student: studentDB,
                        exam: examDB,
                        course: courseDB,
                        grade: grade
                    })];
            case 2:
                GradeDB = _c.sent();
                res.status(200).send({ Grade: GradeDB });
                return [2 /*return*/];
        }
    });
}); };
exports.getStudentGradesInCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, student, course, gradesDB;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, student = _a.student, course = _a.course;
                console.log(student, course);
                return [4 /*yield*/, gradesModel_1["default"].find(course)];
            case 1:
                gradesDB = _b.sent();
                res.status(200).send({ Grades: gradesDB });
                return [2 /*return*/];
        }
    });
}); };
