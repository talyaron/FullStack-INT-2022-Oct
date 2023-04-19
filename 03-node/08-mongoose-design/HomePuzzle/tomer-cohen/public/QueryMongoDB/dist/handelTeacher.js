"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.handelTeacher = void 0;
var teacher_1 = require("./teacher");
function handelTeacher() {
    try {
        fetch("/API/teachers/get-teachers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var teachers = _a.teachers;
            try {
                if (!teachers)
                    throw new Error("didnt find teachers");
                teachers.forEach(function (teacher) {
                    teacher_1.getTeacherCourses(teacher.courses)
                        .then(function (_a) {
                        var courses = _a.courses;
                        teacher_1.renderTeacherTable(__assign(__assign({}, teacher), { courses: courses }));
                    });
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.handelTeacher = handelTeacher;
