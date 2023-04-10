"use strict";
exports.__esModule = true;
exports.GradeSchema = exports.Grade = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
//schema
var Grade = /** @class */ (function () {
    function Grade(name, grade, student) {
        this.name = name;
        this.grade = grade;
        this.student = student;
        this.uid = uuid_1.v4();
    }
    return Grade;
}());
exports.Grade = Grade;
exports.GradeSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    grade: [Number]
});
var GradeModel = mongoose_1["default"].model("gardes", exports.GradeSchema);
exports["default"] = GradeModel;
