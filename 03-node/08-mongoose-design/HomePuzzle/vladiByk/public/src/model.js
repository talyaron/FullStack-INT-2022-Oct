"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Course {
    constructor(name, teachers = [], _id) {
        this.name = name;
        this.teachers = teachers;
        this._id = _id;
    }
    getStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield fetch("/api/v1/students").then;
            return "student list";
        });
    }
}
class Student {
    constructor(name, id = "") {
        this.name = name;
        this.id = id;
    }
    getAverageInCourse(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const average = yield fetch(`${gradesApi}`);
            // return average.toFixed(2);
        });
    }
}
