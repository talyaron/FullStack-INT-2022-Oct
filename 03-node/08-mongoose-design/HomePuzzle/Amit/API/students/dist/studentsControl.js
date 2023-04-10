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
exports.deleteStudent = exports.updateStudentName = exports.getStudents = exports.addStudent = void 0;
var studentsModel_1 = require("./studentsModel");
exports.addStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, studentDB, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name = req.body.name;
                return [4 /*yield*/, studentsModel_1["default"].create({ name: name })];
            case 1:
                studentDB = _a.sent();
                console.log(studentDB);
                res.status(201).send({ ok: true });
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
exports.getStudents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students, error_2;
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
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateStudentName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, updatedName, student, updatedNameDB, students, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, _id = _a._id, updatedName = _a.updatedName;
                if (!_id)
                    throw new Error("No _id in data");
                if (!updatedName)
                    throw new Error("No updated Name in data");
                return [4 /*yield*/, studentsModel_1["default"].findById(_id)];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("no student found");
                return [4 /*yield*/, studentsModel_1["default"].updateOne({ _id: _id }, { name: updatedName })];
            case 2:
                updatedNameDB = _b.sent();
                return [4 /*yield*/, student.save()];
            case 3:
                _b.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 4:
                students = _b.sent();
                res.send({ ok: true, students: students });
                return [3 /*break*/, 6];
            case 5:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deleteStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deletedStudent, students, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                return [4 /*yield*/, studentsModel_1["default"].deleteOne({ _id: _id })];
            case 1:
                deletedStudent = _a.sent();
                return [4 /*yield*/, studentsModel_1["default"].find({})];
            case 2:
                students = _a.sent();
                res.send({ ok: true, students: students });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// export const getStudentGradesInCourse = async (req: any, res: any) => {
//     try {
//       //got from the client
//       const { courseId, studentId } = req.query;
//       //https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html
//       const grades = await GradeModel.find({
//         course: { _id: courseId },
//         user: { _id: studentId },
//       });
//       res.send({ grades });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   };
