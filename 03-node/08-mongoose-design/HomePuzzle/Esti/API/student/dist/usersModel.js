"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    src: String,
    // courses:[String] //[courseId] slow but accurate
    courses: [coursesModel_1.CourseSchema] //fast, but not accurate -> cron jobs
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
