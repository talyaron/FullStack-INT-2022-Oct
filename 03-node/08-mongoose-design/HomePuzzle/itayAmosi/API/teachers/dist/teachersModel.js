"use strict";
exports.__esModule = true;
exports.TeacherSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TeacherSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number
});
var TeacherModel = mongoose_1["default"].model("teachers", exports.TeacherSchema);
exports["default"] = TeacherModel;
