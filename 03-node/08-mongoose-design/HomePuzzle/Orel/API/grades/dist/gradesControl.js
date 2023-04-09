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
exports.updateGradeScore = exports.deleteGrade = exports.addGrade = exports.getGrades = void 0;
var gradesModel_1 = require("./gradesModel");
exports.getGrades = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var grades, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, gradesModel_1["default"].find({})];
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
exports.addGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, courseName, teacherName, assignmentName, score, date, gradeDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, courseName = _a.courseName, teacherName = _a.teacherName, assignmentName = _a.assignmentName, score = _a.score, date = _a.date;
                return [4 /*yield*/, gradesModel_1["default"].create({ courseName: courseName, teacherName: teacherName, assignmentName: assignmentName, score: score, date: date })];
            case 1:
                gradeDB = _b.sent();
                console.log(gradeDB);
                res.status(201).send({ ok: true, gradeDB: gradeDB });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deleteGrade_1, grades, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                console.log(_id);
                return [4 /*yield*/, gradesModel_1["default"].deleteOne({ _id: _id })];
            case 1:
                deleteGrade_1 = _a.sent();
                return [4 /*yield*/, gradesModel_1["default"].find({})];
            case 2:
                grades = _a.sent();
                res.send({ success: true, grades: grades });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateGradeScore = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, score, findGrade, grades, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, _id = _a._id, score = _a.score;
                console.log(_id, score);
                return [4 /*yield*/, gradesModel_1["default"].updateOne({ _id: _id }, { score: score })];
            case 1:
                findGrade = _b.sent();
                return [4 /*yield*/, gradesModel_1["default"].find({})];
            case 2:
                grades = _b.sent();
                res.send({ success: true, grades: grades });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
