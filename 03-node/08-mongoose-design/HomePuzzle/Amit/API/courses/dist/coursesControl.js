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
exports.deleteCourse = exports.updateCourse = exports.addCourse = void 0;
var coursesModel_1 = require("./coursesModel");
var studentsModel_1 = require("../students/studentsModel");
exports.addCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, course, studentId, student, courseDB, students, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, course = _a.course, studentId = _a.studentId;
                return [4 /*yield*/, studentsModel_1["default"].findById(studentId)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("no student found");
                return [4 /*yield*/, coursesModel_1["default"].create({ name: course })];
            case 2:
                courseDB = _b.sent();
                student.courses.push(courseDB);
                return [4 /*yield*/, student.save()];
            case 3:
                _b.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 4:
                students = _b.sent();
                res.status(201).send({ ok: true, students: students });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.updateCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const { name, uid } = req.body;
            // if (!name) throw new Error("No name in data");
            // if (!uid) throw new Error("No uid in data");
            // const user = users.find((user) => user.uid === uid);
            // if (!user) throw new Error("No user in array");
            // user.name = name;
            // res.send({ ok: true });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.deleteCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, courseId_1, studentId, student, course_1, courseIndex, deletedCourse, students, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, courseId_1 = _a.courseId, studentId = _a.studentId;
                console.log("courseId", courseId_1);
                return [4 /*yield*/, studentsModel_1["default"].findById(studentId)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("no student found");
                console.log("student.name", student.name);
                return [4 /*yield*/, coursesModel_1["default"].findById(courseId_1)];
            case 2:
                course_1 = _b.sent();
                if (!course_1)
                    throw new Error("no course found");
                console.log("course._id", course_1._id);
                courseIndex = student.courses.findIndex(function () {
                    console.log("course", course_1);
                    course_1._id === courseId_1;
                });
                console.log("courseIndex", courseIndex);
                student.courses.splice(courseIndex, 1);
                return [4 /*yield*/, coursesModel_1["default"].findOneAndDelete(courseId_1)];
            case 3:
                deletedCourse = _b.sent();
                return [4 /*yield*/, student.save()];
            case 4:
                _b.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 5:
                students = _b.sent();
                res.send({ ok: true, students: students });
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
