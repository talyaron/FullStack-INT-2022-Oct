"use strict";
exports.__esModule = true;
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.StudentSchema = new mongoose_1.Schema({
    name: String,
    familyName: String,
    phone: String
    // courses:[String] //[courseId] slow but accurate
    //courses:[CourseSchema] //fast, but not accurate -> cron jobs
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports["default"] = StudentModel;
