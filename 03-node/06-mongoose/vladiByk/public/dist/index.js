var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var root = document.querySelector("#root");
var Student = /** @class */ (function () {
    function Student(name, grades, _id) {
        if (grades === void 0) { grades = []; }
        if (_id === void 0) { _id = ""; }
        this.name = name;
        this.grades = grades;
        this._id = _id;
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.getAverage = function () {
        return this.grades.reduce(function (a, b) { return a + b; }, 0) / this.grades.length;
    };
    return Student;
}());
var displayStudents = function () { return __awaiter(_this, void 0, void 0, function () {
    var studentList, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log("runnig display students...");
                return [4 /*yield*/, fetch("/api/v1/students")
                        .then(function (res) { return res.json(); })
                        .then(function (_a) {
                        var students = _a.students;
                        return students.map(function (student) {
                            return new Student(student.name, student.grades, student._id);
                        });
                    })];
            case 1:
                studentList = _a.sent();
                console.log(studentList);
                if (studentList)
                    renderStudents(studentList);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
displayStudents();
var renderStudents = function (students) { return __awaiter(_this, void 0, void 0, function () {
    var html, deleteButtons;
    return __generator(this, function (_a) {
        html = students
            .map(function (student) {
            return "<div class=\"studentDiv\" id=\"" + student._id + "\">\n        <b>" + student.name + "</b>\n        <span>Average: " + student.getAverage() + "</span>\n        <div class=\"crudIcons\">\n          <i class=\"fa-regular fa-trash-can\"></i>\n          <i class=\"fa-regular fa-pen-to-square\"></i>\n         </div>\n        </div>";
        })
            .join("");
        root.innerHTML = html;
        deleteButtons = document.querySelectorAll(".fa-trash-can");
        deleteButtons.forEach(function (btn) {
            return btn.addEventListener("click", function () {
                var _a, _b;
                var id = (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
                // console.log(id);
                fetch("/api/v1/students/" + id, { method: "DELETE" });
            });
        });
        return [2 /*return*/];
    });
}); };
// const newStudentGradeInput = document.querySelector(
//   "#grade"
// ) as HTMLInputElement;
// newStudentGradeInput.addEventListener("keyup", (e: KeyboardEvent) => {
//   if (e.key === "Enter") {
//     addNewStudent();
//   }
// });
// const editWindow = document.querySelector(".editWindow") as HTMLDivElement;
// const openEditWindow = async (id: number) => {
//   editWindow.style.display = "flex";
//   const findStudent = studentList.find((student) => Number(student.uuid) == id);
//   if (!findStudent) return alert("User not found");
//   // console.log(findStudent);
//   renderGradeList(findStudent);
// };
// function renderGradeList(student: Student) {
//   const listItemsHtml = student.grades
//     .map(
//       (grade) =>
//         `<li>
//     <span>${grade}</span>
//     <div class="listIcons">
//       <i class="fa-regular fa-square-minus"></i>
//       <i class="fa-solid fa-pen"></i>
//     </div>
//   </li>`
//     )
//     .join("");
//   editWindow.innerHTML = `
//   <h2>${student.name}</h2>
//   <ul class="gradesList">
//       <div><b>Grades</b><b>Edit</b></div>
//     ${listItemsHtml}
//   </ul>
//   <label for="newGrade">
//     <input type="number" id="newGradeInput" placeholder="New grade..." />
//     <input type="submit" id="addGradeBtn"/>
//   </label>
//   <button id="closeEditWindow">Done</button>
//   `;
//   const editGradeBtns = editWindow.querySelectorAll(
//     ".fa-pen"
//   ) as NodeListOf<HTMLIFrameElement>;
//   const editBtnsArr = Array.from(editGradeBtns);
//   editGradeBtnEvent(editBtnsArr, student);
//   const deleteGradeBtns = editWindow.querySelectorAll(
//     ".fa-square-minus"
//   ) as NodeListOf<HTMLElement>;
//   const deleteBtnsArr = Array.from(deleteGradeBtns);
//   deleteGrade(deleteBtnsArr, student);
//   const addGradeBtn = editWindow.querySelector(
//     "#addGradeBtn"
//   ) as HTMLInputElement;
//   const newGradeInput = editWindow.querySelector(
//     "#newGradeInput"
//   ) as HTMLInputElement;
//   addGrade(addGradeBtn, newGradeInput, student);
//   newGradeInput.focus();
// }
// function editGradeBtnEvent(btnArr: Element[], student: Student) {
//   btnArr.forEach((btn) =>
//     btn.addEventListener("click", () => {
//       const gradeIndex = btnArr.indexOf(btn);
//       const listEle = btn.parentElement?.parentElement as HTMLDataListElement;
//       const iconDiv = listEle.querySelector(".listIcons") as HTMLDivElement;
//       const spanEle = listEle.firstElementChild as HTMLSpanElement;
//       const inputEle = document.createElement("input") as HTMLInputElement;
//       inputEle.setAttribute("type", "number");
//       inputEle.value = spanEle.innerHTML;
//       listEle.replaceChild(inputEle, spanEle);
//       inputEle.focus();
//       iconDiv.style.display = "none";
//       inputEle.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//           if (
//             Number(inputEle.value) > 100 ||
//             Number(inputEle.value) < 0 ||
//             !Number(inputEle.value)
//           )
//             return alert("Check grade input");
//           spanEle.textContent = inputEle.value;
//           listEle.replaceChild(spanEle, inputEle);
//           student.grades[gradeIndex] = Number(inputEle.value);
//           // updateStudent(student);
//           student.update();
//           iconDiv.style.display = "flex";
//         }
//       });
//     })
//   );
// }
// function deleteGrade(btnsArr: Element[], studentToUpdate: Student) {
//   btnsArr.forEach((btn) =>
//     btn.addEventListener("click", () => {
//       const gradeIndex = btnsArr.indexOf(btn);
//       const listEle = btn.parentElement?.parentElement as HTMLDataListElement;
//       listEle.remove();
//       studentToUpdate.grades.splice(gradeIndex, 1);
//       studentToUpdate.update();
//     })
//   );
// }
// function addGrade(
//   btn: HTMLInputElement,
//   newGradeInput: HTMLInputElement,
//   student: Student
// ) {
//   btn.addEventListener("click", () => {
//     if (
//       Number(newGradeInput.value) > 100 ||
//       Number(newGradeInput.value) < 0 ||
//       !Number(newGradeInput.value)
//     )
//       return alert("Check grade input");
//     student.addGrade(Number(newGradeInput.value));
//     student.update();
//     renderGradeList(student);
//     newGradeInput.value = "";
//   });
//   newGradeInput.addEventListener("keydown", (e: KeyboardEvent) => {
//     if (e.key === "Enter") {
//       if (
//         Number(newGradeInput.value) > 100 ||
//         Number(newGradeInput.value) < 0 ||
//         !Number(newGradeInput.value)
//       )
//         return alert("Check grade input");
//       student.addGrade(Number(newGradeInput.value));
//       student.update();
//       renderGradeList(student);
//       newGradeInput.value = "";
//     }
//   });
// }
// window.addEventListener("click", (e: Event) => {
//   const target = e.target as HTMLElement;
//   if (target.id === "closeEditWindow") {
//     editWindow.style.display = "none";
//   }
//   if (target.classList.contains("fa-pen-to-square")) {
//     const id = Number(target.parentElement?.parentElement?.id);
//     openEditWindow(id);
//   }
// });
