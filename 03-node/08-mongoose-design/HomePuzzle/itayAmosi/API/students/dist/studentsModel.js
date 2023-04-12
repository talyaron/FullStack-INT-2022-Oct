"use strict";
exports.__esModule = true;
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.StudentSchema = new mongoose_1.Schema({
    name: String,
    lastName: String,
    courses: { type: [String] },
    grades: { type: [Number] }
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports["default"] = StudentModel;
