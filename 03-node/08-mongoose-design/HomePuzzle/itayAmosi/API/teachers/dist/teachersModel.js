"use strict";
exports.__esModule = true;
exports.TeacherSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TeacherSchema = new mongoose_1.Schema({
    name: String,
    lastName: String,
    courses: { type: [String] }
});
var TeacherModel = mongoose_1["default"].model("teachers", exports.TeacherSchema);
exports["default"] = TeacherModel;
