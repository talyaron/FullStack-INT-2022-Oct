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
const apiUrl = "/api/v1/students";
class Student {
    constructor(name, grades = [], _id = "") {
        this.name = name;
        this.grades = grades;
        this._id = _id;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverage() {
        const average = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
        return average.toFixed(2);
    }
}
const displayStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentList = yield fetch(apiUrl)
            .then((res) => res.json())
            .then(({ students }) => students.map((student) => new Student(student.name, student.grades, student._id)));
        if (studentList)
            renderStudents(studentList);
    }
    catch (error) {
        console.error(error);
    }
});
displayStudents();
const renderStudents = (students) => __awaiter(void 0, void 0, void 0, function* () {
    const html = students
        .map((student) => `<div class="studentDiv" id="${student._id}">
        <b>${student.name}</b>
        <span>Average: ${student.getAverage()}</span>
        <div class="crudIcons">
          <i class="fa-regular fa-trash-can"></i>
          <i class="fa-regular fa-pen-to-square"></i>
         </div>
        </div>`)
        .join("");
    root.innerHTML = html;
    const deleteButtons = document.querySelectorAll(".fa-trash-can");
    deleteButtons.forEach((btn) => btn.addEventListener("click", () => {
        var _a, _b;
        const id = (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).catch((error) => console.error(error));
        displayStudents();
    }));
});
const editWindow = document.querySelector(".editWindow");
const openEditWindow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const studentList = yield fetch(apiUrl)
        .then((res) => res.json())
        .then(({ students }) => students.map((student) => new Student(student.name, student.grades, student._id)));
    editWindow.style.display = "flex";
    const findStudent = studentList.find((student) => student._id == id);
    if (!findStudent)
        return alert("User not found");
    renderGradeList(findStudent._id);
});
function renderGradeList(studentID) {
    return __awaiter(this, void 0, void 0, function* () {
        const student = yield fetch(`${apiUrl}/${studentID}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ student }) => new Student(student.name, student.grades, student._id))
            .catch((error) => console.error(error));
        if (!student)
            return;
        const listItemsHtml = student.grades
            .map((grade) => `<li>
    <span>${grade}</span>
    <div class="listIcons">
      <i class="fa-regular fa-square-minus"></i>
      <i class="fa-solid fa-pen"></i>
    </div>
  </li>`)
            .join("");
        editWindow.innerHTML = `
  <h2>${student.name}</h2>
  <ul class="gradesList">
      <div><b>Grades</b><b>Edit</b></div>
    ${listItemsHtml}
  </ul>
  <label for="newGrade">
    <input type="number" id="newGradeInput" placeholder="New grade..." />
    <input type="submit" id="addGradeBtn"/>
  </label>
  <button id="closeEditWindow">Done</button>
  `;
        const editGradeBtns = editWindow.querySelectorAll(".fa-pen");
        const editBtnsArr = Array.from(editGradeBtns);
        editGradeBtnEvent(editBtnsArr, student);
        const deleteGradeBtns = editWindow.querySelectorAll(".fa-square-minus");
        const deleteBtnsArr = Array.from(deleteGradeBtns);
        deleteGrade(deleteBtnsArr, student);
        const addGradeBtn = editWindow.querySelector("#addGradeBtn");
        const newGradeInput = editWindow.querySelector("#newGradeInput");
        addGrade(addGradeBtn, newGradeInput, student);
        newGradeInput.focus();
    });
}
function editGradeBtnEvent(btnArr, student) {
    btnArr.forEach((btn) => btn.addEventListener("click", () => {
        var _a;
        const gradeIndex = btnArr.indexOf(btn);
        const listEle = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        const iconDiv = listEle.querySelector(".listIcons");
        const spanEle = listEle.firstElementChild;
        const inputEle = document.createElement("input");
        inputEle.setAttribute("type", "number");
        inputEle.value = spanEle.innerHTML;
        listEle.replaceChild(inputEle, spanEle);
        inputEle.focus();
        iconDiv.style.display = "none";
        inputEle.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                if (Number(inputEle.value) > 100 ||
                    Number(inputEle.value) < 0 ||
                    !Number(inputEle.value))
                    return alert("Check grade input");
                spanEle.textContent = inputEle.value;
                listEle.replaceChild(spanEle, inputEle);
                iconDiv.style.display = "flex";
            }
        });
    }));
}
function deleteGrade(btnsArr, studentToUpdate) {
    btnsArr.forEach((btn) => btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const gradeIndex = btnsArr.indexOf(btn);
        const listEle = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        listEle.remove();
        const grade = studentToUpdate.grades.splice(gradeIndex, 1);
        yield fetch(`${apiUrl}/${studentToUpdate._id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ grade, gradeIndex, delete: true }),
        }).catch((error) => console.error(error));
        displayStudents();
    })));
}
function addGrade(btn, newGradeInput, student) {
    btn.addEventListener("click", () => {
        updateGrade(newGradeInput, student._id);
    });
    newGradeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            updateGrade(newGradeInput, student._id);
        }
    });
}
function updateGrade(input, studentID) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Number(input.value) > 100 ||
            Number(input.value) < 0 ||
            !Number(input.value))
            return alert("Check grade input");
        yield fetch(`${apiUrl}/${studentID}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ grade: input.value, delete: false }),
        }).catch((error) => console.error(error));
        renderGradeList(studentID);
        displayStudents();
        input.value = "";
    });
}
window.addEventListener("click", (e) => {
    var _a, _b;
    const target = e.target;
    if (target.id === "closeEditWindow") {
        editWindow.style.display = "none";
    }
    if (target.classList.contains("fa-pen-to-square")) {
        const id = (_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
        openEditWindow(id);
    }
});
