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
const courseApi = "http://localhost:3000/api/v1/courses";
const coursesRoot = document.querySelector("#coursesRoot");
class Course {
    constructor(name, teachers = [], id) {
        this.name = name;
        this.teachers = teachers;
        this.id = id;
    }
    getStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield fetch("/api/v1/students").then;
            return "student list";
        });
    }
}
const displayCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coursesList = yield fetch(courseApi)
            .then((res) => res.json())
            .then(({ courses }) => courses.map((course) => new Course(course.name, course.teachers, course._id)));
        if (coursesList)
            renderCourses(coursesList);
    }
    catch (error) {
        console.error(error);
    }
});
function renderCourses(coursesList) {
    coursesRoot.innerHTML = coursesList
        .map((course) => `<a href="./students.html" class="course" id="${course.id}">${course.name}</a>`)
        .join("");
}
function deleteCourse(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${courseApi}/${courseId}`)
            .then((res) => res.json())
            .catch((error) => console.error(error));
    });
}
displayCourses();
