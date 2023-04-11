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
var studentModel_1 = require("../students/studentModel");
exports.addCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, course, studentId, courseDB, courseObj, courses, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, course = _a.course, studentId = _a.studentId;
                return [4 /*yield*/, coursesModel_1["default"].create({ name: course })];
            case 1:
                courseDB = _b.sent();
                courseObj = { _id: courseDB._id, name: course };
                return [4 /*yield*/, studentModel_1["default"].findByIdAndUpdate(studentId, { $push: { courses: courseObj } }, { "new": true })];
            case 2:
                _b.sent();
                return [4 /*yield*/, coursesModel_1["default"].find({})];
            case 3:
                courses = _b.sent();
                res.status(201).send({ ok: true, courses: courses });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(error_1);
                if (error_1 instanceof Error) {
                    res.status(500).send({ error: error_1.message });
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, courseId, name, course, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, courseId = _a.courseId, name = _a.name;
                return [4 /*yield*/, coursesModel_1["default"].findByIdAndUpdate(courseId, { name: name }, { "new": true })];
            case 1:
                course = _b.sent();
                res.send({ ok: true, course: course });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                if (error_2 instanceof Error) {
                    res.status(500).send({ error: error_2.message });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var courseId, deletedCourse, courses, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                courseId = req.body.courseId;
                return [4 /*yield*/, coursesModel_1["default"].deleteOne({ _id: courseId })];
            case 1:
                deletedCourse = _a.sent();
                return [4 /*yield*/, coursesModel_1["default"].find({})];
            case 2:
                courses = _a.sent();
                res.send({ ok: true, courses: courses });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                if (error_3 instanceof Error) {
                    res.status(500).send({ error: error_3.message });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
