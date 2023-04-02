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
var app = express_1["default"]();
var body_parser_1 = require("body-parser");
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: false }));
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
////////data//////////////
var Student = /** @class */ (function () {
    function Student(name, _id) {
        this.name = name;
        this._id = _id;
        this.grades = [];
    }
    Student.prototype.getSimpleStudent = function () {
        return { _id: this._id, name: this.name, grades: this.grades };
    };
    return Student;
}());
var Grade = /** @class */ (function () {
    function Grade(test, value, _id) {
        this.test = test;
        this.value = value;
        this._id = _id;
    }
    Grade.prototype.getSimpleGrade = function () {
        return { _id: this._id, test: this.test, grades: this.value };
    };
    return Grade;
}());
var students = [];
////////////////////////////////////////////////////////////
//schema
var StudentSchema = new mongoose_1.Schema({
    name: String,
    grades: []
});
var StudentModel = mongoose_1["default"].model("students", StudentSchema);
var GradeSchema = new mongoose_1.Schema({
    test: String,
    value: Number
});
var GradeModel = mongoose_1["default"].model("grades", GradeSchema);
////getting data from public
app.use(express_1["default"].json());
//data route
//get (from server)
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
//add student
app.post("/api/add-student", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, studentDB, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name = req.body.name;
                console.log("{ name }", name);
                return [4 /*yield*/, StudentModel.create({ name: name })];
            case 1:
                studentDB = _a.sent();
                console.log(studentDB);
                res.status(201).send({ ok: true });
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
// add grade to student
app.post("/api/add-grade", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newGrade, _id_1, student, gradeDB, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, newGrade = _a.newGrade, _id_1 = _a._id;
                //   console.log("{ test }", test);
                //   console.log("{ value }", value);
                console.log("{ _id }", _id_1);
                //   if (!test) throw new Error("No test in data");
                //   if (!value) throw new Error("No value in data");
                if (!newGrade)
                    throw new Error("No new Grade in data");
                if (!_id_1)
                    throw new Error("No _id in data");
                student = students.find(function (student) { return student._id === _id_1; });
                if (!student)
                    throw new Error("No student in data");
                return [4 /*yield*/, GradeModel.create({ newGrade: newGrade })];
            case 1:
                gradeDB = _b.sent();
                console.log(gradeDB);
                // const filter = { _id: `'${_id}'` };
                // const update = { test: `'${test}'`, value: `${value}` };
                // let studentDB = await StudentModel.findOneAndUpdate(filter, update);
                //   student.grades.push(gradeDB);
                res.status(201).send({ ok: true });
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
//update
// //update whole entity
// app.put("/api/update-user", (req, res) => {
//   try {
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// // transodrm enetiy
// app.patch("/api/update-user-name", (req, res) => {
//   try {
//     const { name, uid } = req.body;
//     if (!name) throw new Error("No name in data");
//     if (!uid) throw new Error("No uid in data");
//     const user = users.find((user) => user.uid === uid);
//     if (!user) throw new Error("No user in array");
//     user.name = name;
//     res.send({ok:true})
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// app.delete("/api/delete-user", (req, res) => {
//   try {
//     const { uid } = req.body;
//     if (!uid) throw new Error("no uid in data");
//     const index = users.findIndex((user) => user.uid === uid);
//     if (index === -1)
//       throw new Error(`couldnt find user in users, with ID ${uid}`);
//       users.splice(index, 1);
//     const _users = users.map((user) => user.getSimpleUser());
//     res.send({ ok: true,users:_users });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
//static file
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
