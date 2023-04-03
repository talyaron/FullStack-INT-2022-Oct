"use strict";
exports.__esModule = true;
exports.Student = void 0;
var uuid_1 = require("uuid");
var Student = /** @class */ (function () {
    function Student(name, englishClass, mathClass, sportsClass, historyClass) {
        this.name = name;
        this.englishClass = englishClass;
        this.mathClass = mathClass;
        this.sportsClass = sportsClass;
        this.historyClass = historyClass;
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
