"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var teacherSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number
});
var TeacherModel = mongoose_1["default"].model("teachers", teacherSchema);
exports["default"] = TeacherModel;
