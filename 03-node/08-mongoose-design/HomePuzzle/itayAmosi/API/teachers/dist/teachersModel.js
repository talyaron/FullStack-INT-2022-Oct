"use strict";
exports.__esModule = true;
exports.TeacherSchema = exports.Teacher = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var coursesModel_1 = require("../courses/coursesModel");
var Teacher = /** @class */ (function () {
    function Teacher(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.uid = uuid_1.v4();
    }
    return Teacher;
}());
exports.Teacher = Teacher;
exports.TeacherSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    courses: [coursesModel_1.CourseSchema]
});
var TeacherModel = mongoose_1["default"].model("teachers", exports.TeacherSchema);
exports["default"] = TeacherModel;
