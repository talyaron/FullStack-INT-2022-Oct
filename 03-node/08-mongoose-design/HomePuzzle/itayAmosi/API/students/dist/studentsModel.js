"use strict";
exports.__esModule = true;
exports.Student = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var Student = /** @class */ (function () {
    function Student(name, englishClass, mathClass, sportsClass, historyClass, avg) {
        this.name = name;
        this.englishClass = englishClass;
        this.mathClass = mathClass;
        this.sportsClass = sportsClass;
        this.historyClass = historyClass;
        this.avg = avg;
        this.uid = uuid_1.v4();
    }
    Student.prototype.getSimple = function () {
        return {
            uid: this.uid,
            name: this.name,
            englishClass: this.englishClass,
            mathClass: this.mathClass,
            sportsClass: this.sportsClass,
            historyClass: this.historyClass
        };
    };
    return Student;
}());
exports.Student = Student;
var studentSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number
});
var StudentModel = mongoose_1["default"].model("students", studentSchema);
exports["default"] = StudentModel;
