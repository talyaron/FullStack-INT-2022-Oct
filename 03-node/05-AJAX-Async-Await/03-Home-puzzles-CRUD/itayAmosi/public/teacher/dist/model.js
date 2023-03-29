"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var uuid_1 = require("uuid");
var Teacher = /** @class */ (function () {
    function Teacher(name, password) {
        this.name = name;
        this.password = password;
        this.uid = uuid_1.v4();
    }
    Teacher.prototype.getSimple = function () {
        return {
            uid: this.uid,
            name: this.name,
            password: this.password
        };
    };
    return Teacher;
}());
exports.Teacher = Teacher;
