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
const root = document.querySelector("#root");
const studentApi = "/api/v1/students";
const gradesApi = "/api/v1/grades";
const addStudentForm = document.querySelector("#addStudentForm");
addStudentForm.addEventListener("submit", handleAddStudentForm);
function handleAddStudentForm(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const newStudentName = addStudentForm.fullName.value;
        const newStudentGrade = addStudentForm.grade.value;
        const student = yield fetch(`${studentApi}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: newStudentName }),
        })
            .then((res) => res.json())
            .then(({ student }) => new Student(student.name))
            .catch((error) => console.error(error));
        yield fetch(`${gradesApi}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ grade: newStudentGrade }),
        }).catch((error) => console.error(error));
        displayStudents();
    });
}
