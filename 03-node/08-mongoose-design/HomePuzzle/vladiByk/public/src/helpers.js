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
function createStudent(studentName, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const createdStudent = yield fetch(`${studentApi}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: studentName, courseId }),
        })
            .then((res) => res.json())
            .then(({ student }) => student)
            .catch((error) => console.error(error));
        return createdStudent;
    });
}
function createGrade(score, courseId, studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${gradesApi}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                score,
                courseId,
                studentId: studentId,
            }),
        }).catch((error) => console.error(error));
    });
}
function getTeacher(teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`${teacherApi}/${teacherId}`)
            .then((res) => res.json())
            .then(({ teacher }) => teacher)
            .catch((error) => console.error(error));
    });
}
function getTeacherCourses(teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(`${courseApi}/teacher/${teacherId}`)
            .then((res) => res.json())
            .then(({ courses }) => courses)
            .catch((error) => console.error(error));
    });
}
function getCourse(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`${courseApi}/${courseId}`)
            .then((res) => res.json())
            .then(({ course }) => course)
            .catch((error) => console.error(error));
    });
}
function getStudent(studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`${studentApi}/${studentId}`)
            .then((res) => res.json())
            .then(({ student }) => student)
            .catch((error) => console.error(error));
    });
}
function getGradesInCourse(studentId, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(`${gradesApi}/${studentId}?courseId=${courseId}`)
            .then((res) => res.json())
            .then(({ grades }) => grades)
            .catch((error) => console.error(error));
    });
}
function deleteAllGradesInCourse(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(`${gradesApi}/inCourse/${courseId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).catch((error) => console.error(error));
    });
}
function deleteAllStudentsInCourse(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(`${studentApi}/inCourse/${courseId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).catch((error) => console.error(error));
    });
}
function deleteCourse(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(`${courseApi}/${courseId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).catch((error) => console.error(error));
    });
}
