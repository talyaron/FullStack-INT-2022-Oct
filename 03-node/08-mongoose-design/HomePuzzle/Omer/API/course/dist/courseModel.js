"use strict";
exports.__esModule = true;
exports.courseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.courseSchema = new mongoose_1.Schema({
    name: String
});
var courseModel = mongoose_1["default"].model("course", exports.courseSchema);
exports["default"] = courseModel;
