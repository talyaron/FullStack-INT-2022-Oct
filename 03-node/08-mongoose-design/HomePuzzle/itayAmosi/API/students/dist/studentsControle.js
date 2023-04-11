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
exports.addMockStudents = exports.updateStudentName = exports.deleteStudent = exports.getStudents = void 0;
var coursesModel_1 = require("../courses/coursesModel");
var studentsModel_1 = require("./studentsModel");
var uuid_1 = require("uuid");
// export const addStudentGrades = async (req: any, res: any) => {
//   const { name, lastname, englishClass, mathClass, sportsClass, historyClass } =
//     req.body;
//   if (
//     !name ||
//     !lastname ||
//     !englishClass ||
//     !mathClass ||
//     !sportsClass ||
//     !historyClass
//   ) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }
//   const newStudent = await StudentModel.create({
//     name,
//     lastname,
//     englishClass,
//     mathClass,
//     sportsClass,
//     historyClass,
//     uid: uuidv4(),
//   });
//   res.status(200).send({ ok: true, newStudent });
// };
// export const addMockStudent = async (req: any, res: any) => {
//   const newStudent = await StudentModel.create({
//     name: uuidv4().slice(0, 7),
//     lastname: "moshe",
//     englishClass: 70,
//     mathClass: 80,
//     sportsClass: 90,
//     historyClass: 89,
//     uid: uuidv4(),
//     avg: 564,
//   });
//   console.log(newStudent);
//   res.status(200).send({ ok: true, newStudent });
// };
exports.getStudents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 1:
                students = _a.sent();
                res.send({ students: students });
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
exports.deleteStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.query._id;
                if (!_id)
                    throw new Error("Invalid to find _id");
                return [4 /*yield*/, studentsModel_1["default"].deleteOne({ _id: _id })];
            case 1:
                _a.sent();
                console.log(_id);
                res.sendStatus(200);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateStudentName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, _id, student, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, name = _a.name, _id = _a._id;
                console.log(name, _id);
                if (!name)
                    throw new Error("No name in data");
                if (!_id)
                    throw new Error("No uid in data");
                return [4 /*yield*/, studentsModel_1["default"].findOneAndUpdate({ _id: _id }, { name: name })];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("No student in array");
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addMockStudents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newStudent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, studentsModel_1["default"].create({
                    uid: uuid_1.v4(),
                    name: "student_" + uuid_1.v4().slice(0, 7),
                    lastName: uuid_1.v4().slice(0, 7),
                    courses: coursesModel_1.CourseSchema
                })];
            case 1:
                newStudent = _a.sent();
                console.log(newStudent);
                res.status(200).send({ ok: true, newStudent: newStudent });
                return [2 /*return*/];
        }
    });
}); };
