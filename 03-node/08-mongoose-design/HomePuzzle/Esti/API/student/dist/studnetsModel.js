"use strict";
exports.__esModule = true;
exports.StudentsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.StudentsSchema = new mongoose_1.Schema({
    name: String
});
var StudentsModel = mongoose_1["default"].model("students", exports.StudentsSchema);
exports["default"] = StudentsModel;
