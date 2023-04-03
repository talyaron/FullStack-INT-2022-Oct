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
exports.Teacher = exports.Student = void 0;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
var StudentSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number
});
var StudentModel = mongoose_1["default"].model("students", StudentSchema);
var Student = /** @class */ (function () {
    function Student(name, englishClass, mathClass, sportsClass, historyClass) {
        this.name = name;
        this.englishClass = englishClass;
        this.mathClass = mathClass;
        this.sportsClass = sportsClass;
        this.historyClass = historyClass;
        this.uid = uuid_1.v4();
    }
    Student.prototype.getSimple = function () {
        return {
            uid: this.uid,
            name: this.name,
            englishClass: this.englishClass,
            mathClass: this.mathClass,
            sportsClass: this.sportsClass,
            historyClass: this.historyClass
        };
    };
    return Student;
}());
exports.Student = Student;
var students = [new Student("Moshe", 68, 59, 95, 75)];
// console.log(students);
var Teacher = /** @class */ (function () {
    function Teacher(name, password) {
        this.name = name;
        this.password = password;
        this.uid = uuid_1.v4();
    }
    Teacher.prototype.getSimple = function () {
        return {
            uid: this.uid,
            name: this.name,
            password: this.password
        };
    };
    return Teacher;
}());
exports.Teacher = Teacher;
var teachers = [new Teacher("tal", 1235)];
app.post("/api/add-student-grades", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, englishClass, mathClass, sportsClass, historyClass, newStudent;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, englishClass = _a.englishClass, mathClass = _a.mathClass, sportsClass = _a.sportsClass, historyClass = _a.historyClass;
                console.log(req.body);
                if (!name || !englishClass || !mathClass || !sportsClass || !historyClass) {
                    return [2 /*return*/, res.status(400).json({ error: "Missing required fields" })];
                }
                return [4 /*yield*/, StudentModel.create({
                        name: name,
                        englishClass: englishClass,
                        mathClass: mathClass,
                        sportsClass: sportsClass,
                        historyClass: historyClass
                    })];
            case 1:
                newStudent = _b.sent();
                // students.push(newStudent);
                res.status(200).send({ ok: true, newStudent: newStudent });
                return [2 /*return*/];
        }
    });
}); });
app.get("/api/get-students", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, StudentModel.find({})];
            case 1:
                students_1 = _a.sent();
                res.send({ students: students_1 });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/api/delete-student", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, deletedStudent, students_2, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                uid = req.body.uid;
                console.log(uid);
                if (!uid)
                    throw new Error("no uid in data");
                return [4 /*yield*/, StudentModel.findOneAndDelete({ uid: uid })];
            case 1:
                deletedStudent = _a.sent();
                if (!deletedStudent)
                    throw new Error("couldnt find user in database with ID " + uid);
                return [4 /*yield*/, StudentModel.find({})];
            case 2:
                students_2 = _a.sent();
                res.send({ ok: true, students: students_2 });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
