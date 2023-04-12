"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CourseSchema = new mongoose_1.Schema({
    name: String
});
var StudentSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    email: String,
    courses: [CourseSchema]
});
var StudentModel = mongoose_1.model("Student", StudentSchema);
exports["default"] = StudentModel;
