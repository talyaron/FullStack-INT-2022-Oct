"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var usersModel_1 = require("../users/usersModel");
var GradeSchema = new mongoose_1.Schema({
    grade: Number,
    user: usersModel_1.UserSchema,
    course: coursesModel_1.CourseSchema
});
var GradeModel = mongoose_1["default"].model("users", GradeSchema);
exports["default"] = GradeModel;
