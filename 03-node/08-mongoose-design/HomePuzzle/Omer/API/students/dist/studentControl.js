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
exports.deleteCourseFromStudent = exports.addCourse = exports.deleteStudent = exports.getStudents = exports.addStudent = void 0;
var studentModel_1 = require("./studentModel");
exports.addStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, age, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, age = _a.age;
                return [4 /*yield*/, studentModel_1["default"].create({ name: name, age: age })];
            case 1:
                _b.sent();
                res.status(201).send(true);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStudents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, studentModel_1["default"].find({})];
            case 1:
                students = _a.sent();
                res.status(200).send(students);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, students, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body;
                return [4 /*yield*/, studentModel_1["default"].findByIdAndDelete(_id)];
            case 1:
                _a.sent();
                return [4 /*yield*/, studentModel_1["default"].find({})];
            case 2:
                students = _a.sent();
                res.status(200).send(students);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, course_1, student_id, student, courses, index, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, course_1 = _a.course, student_id = _a.student_id;
                return [4 /*yield*/, studentModel_1["default"].findById(student_id)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("student not found");
                courses = student.courses;
                index = courses.findIndex(function (course1) { return course1._id == course_1._id; });
                if (!(index != -1)) return [3 /*break*/, 2];
                res.status(200).send({ status: false, message: "course already added" });
                return [3 /*break*/, 4];
            case 2:
                courses.push(course_1);
                student.courses = courses;
                return [4 /*yield*/, student.save()];
            case 3:
                _b.sent();
                console.log(student);
                res.status(200).send(true);
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).send(error_4);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deleteCourseFromStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, studentId, courseId_1, student, courses, index, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, studentId = _a.studentId, courseId_1 = _a.courseId;
                return [4 /*yield*/, studentModel_1["default"].findById(studentId)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("students not found");
                courses = student.courses;
                index = courses.findIndex(function (course) { return course._id == courseId_1; });
                if (index == -1)
                    throw new Error("course not found");
                courses.splice(index, 1);
                student.courses = courses;
                return [4 /*yield*/, student.save()];
            case 2:
                _b.sent();
                res.status(200).send(true);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                console.error(error_5);
                res.status(500).send(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
