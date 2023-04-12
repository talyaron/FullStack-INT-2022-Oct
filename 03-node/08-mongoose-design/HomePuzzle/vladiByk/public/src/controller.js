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
const displayStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentList = yield fetch(studentApi)
            .then((res) => res.json())
            .then(({ students }) => students.map((student) => new Student(student.name, student.id)));
        if (studentList)
            renderStudents(studentList);
    }
    catch (error) {
        console.error(error);
    }
});
const renderStudents = (students) => {
    const html = students
        .map((student) => `<div class="studentDiv" id="${student.id}">
          <b>${student.name}</b>
          <span>Average: ${student}</span>
          <div class="crudIcons">
            <i class="fa-regular fa-trash-can"></i>
            <i class="fa-regular fa-pen-to-square"></i>
           </div>
          </div>`)
        .join("");
    root.innerHTML = html;
    const deleteButtons = document.querySelectorAll(".fa-trash-can");
    deleteButtons.forEach((btn) => btn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const id = (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
        yield fetch(`${studentApi}/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).catch((error) => console.error(error));
        displayStudents();
    })));
};
