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
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
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
var studentSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number
});
var StudentModel = mongoose_1["default"].model("students", studentSchema);
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
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
                        historyClass: historyClass,
                        uid: uuid_1.v4()
                    })];
            case 1:
                newStudent = _b.sent();
                // students.push(newStudent);
                res.status(200).send({ ok: true, newStudent: newStudent });
                return [2 /*return*/];
        }
    });
}); });
app.post("/api/add-mock-student", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newStudent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, StudentModel.create({
                    name: uuid_1.v4().slice(0, 7),
                    englishClass: 70,
                    mathClass: 80,
                    sportsClass: 90,
                    historyClass: 89,
                    uid: uuid_1.v4(),
                    avg: 564
                })];
            case 1:
                newStudent = _a.sent();
                res.status(200).send({ ok: true, newStudent: newStudent });
                return [2 /*return*/];
        }
    });
}); });
app.get("/api/get-students", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, StudentModel.find({})];
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
}); });
app["delete"]("/api/delete-student", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uid = req.body.uid;
                if (!uid)
                    throw new Error("Invalid to find uid");
                return [4 /*yield*/, StudentModel.deleteOne({ uid: uid })];
            case 1:
                _a.sent();
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
}); });
app.patch("/api/update-student-name", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, uid, student, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, uid = _a.uid;
                console.log(name, uid);
                if (!name)
                    throw new Error("No name in data");
                if (!uid)
                    throw new Error("No uid in data");
                return [4 /*yield*/, StudentModel.findOneAndUpdate({ uid: uid }, { name: name })];
            case 1:
                student = _b.sent();
                if (!student)
                    throw new Error("No student in array");
                console.log(student);
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
}); });
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
