"use strict";
exports.__esModule = true;
// express
var express_1 = require("express");
var app = express_1["default"]();
// DB
var mongoose_1 = require("mongoose");
var serverPort = 5000;
// dotenv
var dotenv = require("dotenv");
dotenv.config();
mongoose_1["default"]
    .connect("" + process.env.MONGO_DB)
    .then(function () { return console.log("DB connected!"); });
// express USE
app.use(express_1["default"].static('public/index'));
app.use(express_1["default"].static('public'));
app.use(express_1["default"].json());
app.post("/api/v1/add-teacher", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var teacherUsername, teacherExists, teacherCreation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                teacherUsername = req.body.teacherUsername;
                return [4 /*yield*/, TeacherModel.findOne({ name: teacherUsername })];
            case 1:
                teacherExists = _a.sent();
                if (!(teacherExists == null)) return [3 /*break*/, 3];
                return [4 /*yield*/, TeacherModel.create({ name: teacherUsername })];
            case 2:
                teacherCreation = _a.sent();
                res.status(201).send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                res.status(500).send({ ok: false });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/add-course", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newCourseName, teacherId, teacherExists, teacherCreation;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, newCourseName = _a.newCourseName, teacherId = _a.teacherId;
                return [4 /*yield*/, CourseModel.findOne({ name: newCourseName, teacher: teacherId })];
            case 1:
                teacherExists = _b.sent();
                if (!(teacherExists == null)) return [3 /*break*/, 3];
                return [4 /*yield*/, TeacherModel.create({ name: teacherUsername })];
            case 2:
                teacherCreation = _b.sent();
                res.status(201).send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                res.status(500).send({ ok: false });
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/get-courses", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var teacherUsername, courses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                teacherUsername = req.body.teacherUsername;
                return [4 /*yield*/, CourseModel.find({ teacher: teacherUsername })];
            case 1:
                courses = _a.sent();
                console.log(courses);
                res.status(201).send(courses);
                return [2 /*return*/];
        }
    });
}); });
app.listen(serverPort, function () {
    console.log("Server Started at port " + serverPort);
});
