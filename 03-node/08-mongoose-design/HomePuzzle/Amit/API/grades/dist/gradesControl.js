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
exports.deleteGrade = exports.updateGrade = exports.addGrade = void 0;
var coursesModel_1 = require("../courses/coursesModel");
var studentsModel_1 = require("../students/studentsModel");
var gradesModel_1 = require("./gradesModel");
exports.addGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, courseId_1, studentId, student, course, courseIndex, gradeDB, students, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, courseId_1 = _a.courseId, studentId = _a.studentId;
                if (!courseId_1)
                    throw new Error("No course Id in data");
                if (!studentId)
                    throw new Error("No student Id in data");
                return [4 /*yield*/, studentsModel_1["default"].findById(studentId)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("no student found");
                return [4 /*yield*/, coursesModel_1["default"].findById(courseId_1)];
            case 2:
                course = _b.sent();
                if (!course)
                    throw new Error("no course found");
                courseIndex = student.courses.findIndex(function (course) { var _a; return ((_a = course._id) === null || _a === void 0 ? void 0 : _a.toString()) === courseId_1.toString(); });
                if (courseIndex !== 0)
                    throw new Error("no course index found");
                return [4 /*yield*/, gradesModel_1["default"].create({ grade: undefined })];
            case 3:
                gradeDB = _b.sent();
                student.courses[courseIndex].grades.push(gradeDB);
                return [4 /*yield*/, student.save()];
            case 4:
                _b.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 5:
                students = _b.sent();
                res.status(201).send({ ok: true, students: students });
                return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.updateGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, courseId_2, studentId, gradeId_1, updatedGrade, student, course, updatedGradeDB, courseIndex, grade, students, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, courseId_2 = _a.courseId, studentId = _a.studentId, gradeId_1 = _a.gradeId, updatedGrade = _a.updatedGrade;
                if (!courseId_2)
                    throw new Error("No course Id in data");
                if (!studentId)
                    throw new Error("No student Id in data");
                if (!updatedGrade)
                    throw new Error("No updated Course in data");
                return [4 /*yield*/, studentsModel_1["default"].findById(studentId)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("no student found");
                return [4 /*yield*/, coursesModel_1["default"].findById(courseId_2)];
            case 2:
                course = _b.sent();
                if (!course)
                    throw new Error("no course found");
                return [4 /*yield*/, gradesModel_1["default"].updateOne({ gradeId: gradeId_1 }, { name: updatedGrade })];
            case 3:
                updatedGradeDB = _b.sent();
                courseIndex = student.courses.findIndex(function (course) { var _a; return ((_a = course._id) === null || _a === void 0 ? void 0 : _a.toString()) === courseId_2.toString(); });
                if ((!courseIndex) && (courseIndex !== 0))
                    throw new Error("course Index not found");
                grade = student.courses[courseIndex].grades.find(function (grade) { var _a; return ((_a = grade._id) === null || _a === void 0 ? void 0 : _a.toString()) === gradeId_1.toString(); });
                if (!grade)
                    throw new Error("grade not found");
                grade.grade = parseInt(updatedGrade);
                return [4 /*yield*/, student.save()];
            case 4:
                _b.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 5:
                students = _b.sent();
                res.status(201).send({ ok: true, students: students });
                return [3 /*break*/, 7];
            case 6:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.deleteGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, courseId_3, studentId, gradeId_2, student, course, courseIndex, gradeIndex, deletedGrade, students, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, courseId_3 = _a.courseId, studentId = _a.studentId, gradeId_2 = _a.gradeId;
                console.log("studentId", studentId);
                return [4 /*yield*/, studentsModel_1["default"].findById(studentId)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("no student found");
                return [4 /*yield*/, coursesModel_1["default"].findById(courseId_3)];
            case 2:
                course = _b.sent();
                if (!course)
                    throw new Error("no course found");
                courseIndex = student.courses.findIndex(function (course) { var _a; return ((_a = course._id) === null || _a === void 0 ? void 0 : _a.toString()) === courseId_3.toString(); });
                if ((!courseIndex) && (courseIndex !== 0))
                    throw new Error("course Index not found");
                gradeIndex = student.courses[courseIndex].grades.findIndex(function (grade) { var _a; return ((_a = grade._id) === null || _a === void 0 ? void 0 : _a.toString()) === gradeId_2.toString(); });
                if ((!gradeIndex) && (gradeIndex !== 0))
                    throw new Error("grade Index not found");
                student.courses[courseIndex].grades.splice(gradeIndex, 1);
                return [4 /*yield*/, gradesModel_1["default"].findOneAndDelete(gradeId_2)];
            case 3:
                deletedGrade = _b.sent();
                return [4 /*yield*/, student.save()];
            case 4:
                _b.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 5:
                students = _b.sent();
                res.send({ ok: true, students: students });
                return [3 /*break*/, 7];
            case 6:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
