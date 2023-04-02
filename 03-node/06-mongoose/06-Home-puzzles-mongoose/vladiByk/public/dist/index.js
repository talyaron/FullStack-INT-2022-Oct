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
var apiUrl = "/api/v1/students";
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
        var average = this.grades.reduce(function (a, b) { return a + b; }, 0) / this.grades.length;
        return average.toFixed(2);
    };
    return Student;
}());
var fetchStudents = function () {
    return fetch(apiUrl).then(function (res) { return res.json(); });
};
var displayStudents = function () { return __awaiter(_this, void 0, void 0, function () {
    var studentList, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log("runnig display students...");
                return [4 /*yield*/, fetch(apiUrl)
                        .then(function (res) { return res.json(); })
                        .then(function (_a) {
                        var students = _a.students;
                        return students.map(function (student) {
                            return new Student(student.name, student.grades, student._id);
                        });
                    })];
            case 1:
                studentList = _a.sent();
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
                fetch(apiUrl + "/" + id, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })
                    .then(function (res) { return res.json(); })
                    .then(function (_a) {
                    var students = _a.students;
                    return renderStudents(students.map(function (student) {
                        return new Student(student.name, student.grades, student._id);
                    }));
                })["catch"](function (error) { return console.error(error); });
            });
        });
        return [2 /*return*/];
    });
}); };
var editWindow = document.querySelector(".editWindow");
var openEditWindow = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var studentList, findStudent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                editWindow.style.display = "flex";
                return [4 /*yield*/, fetchStudents().then(function (_a) {
                        var students = _a.students;
                        return students.map(function (student) {
                            return new Student(student.name, student.grades, student._id);
                        });
                    })];
            case 1:
                studentList = _a.sent();
                findStudent = studentList.find(function (student) { return student._id == id; });
                if (!findStudent)
                    return [2 /*return*/, alert("User not found")];
                renderGradeList(findStudent._id);
                return [2 /*return*/];
        }
    });
}); };
function renderGradeList(studentID) {
    return __awaiter(this, void 0, void 0, function () {
        var student, listItemsHtml, editGradeBtns, editBtnsArr, deleteGradeBtns, deleteBtnsArr, addGradeBtn, newGradeInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiUrl + "/" + studentID, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (_a) {
                        var student = _a.student;
                        return new Student(student.name, student.grades, student._id);
                    })["catch"](function (error) { return console.error(error); })];
                case 1:
                    student = _a.sent();
                    if (!student)
                        return [2 /*return*/];
                    listItemsHtml = student.grades
                        .map(function (grade) {
                        return "<li>\n    <span>" + grade + "</span>\n    <div class=\"listIcons\">\n      <i class=\"fa-regular fa-square-minus\"></i>\n      <i class=\"fa-solid fa-pen\"></i>\n    </div>\n  </li>";
                    })
                        .join("");
                    editWindow.innerHTML = "\n  <h2>" + student.name + "</h2>\n  <ul class=\"gradesList\">\n      <div><b>Grades</b><b>Edit</b></div>\n    " + listItemsHtml + "\n  </ul>\n  <label for=\"newGrade\">\n    <input type=\"number\" id=\"newGradeInput\" placeholder=\"New grade...\" />\n    <input type=\"submit\" id=\"addGradeBtn\"/>\n  </label>\n  <button id=\"closeEditWindow\">Done</button>\n  ";
                    editGradeBtns = editWindow.querySelectorAll(".fa-pen");
                    editBtnsArr = Array.from(editGradeBtns);
                    editGradeBtnEvent(editBtnsArr, student);
                    deleteGradeBtns = editWindow.querySelectorAll(".fa-square-minus");
                    deleteBtnsArr = Array.from(deleteGradeBtns);
                    deleteGrade(deleteBtnsArr, student);
                    addGradeBtn = editWindow.querySelector("#addGradeBtn");
                    newGradeInput = editWindow.querySelector("#newGradeInput");
                    addGrade(addGradeBtn, newGradeInput, student);
                    newGradeInput.focus();
                    return [2 /*return*/];
            }
        });
    });
}
function editGradeBtnEvent(btnArr, student) {
    btnArr.forEach(function (btn) {
        return btn.addEventListener("click", function () {
            var _a;
            var gradeIndex = btnArr.indexOf(btn);
            var listEle = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            var iconDiv = listEle.querySelector(".listIcons");
            var spanEle = listEle.firstElementChild;
            var inputEle = document.createElement("input");
            inputEle.setAttribute("type", "number");
            inputEle.value = spanEle.innerHTML;
            listEle.replaceChild(inputEle, spanEle);
            inputEle.focus();
            iconDiv.style.display = "none";
            inputEle.addEventListener("keyup", function (e) {
                if (e.key === "Enter") {
                    if (Number(inputEle.value) > 100 ||
                        Number(inputEle.value) < 0 ||
                        !Number(inputEle.value))
                        return alert("Check grade input");
                    spanEle.textContent = inputEle.value;
                    listEle.replaceChild(spanEle, inputEle);
                    student.grades[gradeIndex] = Number(inputEle.value);
                    // updateStudent(student);
                    // student.update();
                    iconDiv.style.display = "flex";
                }
            });
        });
    });
}
function deleteGrade(btnsArr, studentToUpdate) {
    btnsArr.forEach(function (btn) {
        return btn.addEventListener("click", function () {
            var _a;
            var gradeIndex = btnsArr.indexOf(btn);
            var listEle = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            listEle.remove();
            var grade = studentToUpdate.grades.splice(gradeIndex, 1);
            fetch(apiUrl + "/" + studentToUpdate._id, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ grade: grade, gradeIndex: gradeIndex, "delete": true })
            })
                .then(function (res) { return res.json(); })
                .then(function (data) { return console.log(data); })["catch"](function (error) { return console.error(error); });
        });
    });
}
function addGrade(btn, newGradeInput, student) {
    btn.addEventListener("click", function () {
        updateGrade(newGradeInput, student._id);
    });
    newGradeInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            updateGrade(newGradeInput, student._id);
        }
    });
}
function updateGrade(input, studentID) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (Number(input.value) > 100 ||
                        Number(input.value) < 0 ||
                        !Number(input.value))
                        return [2 /*return*/, alert("Check grade input")];
                    return [4 /*yield*/, fetch(apiUrl + "/" + studentID, {
                            method: "PATCH",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ grade: input.value, "delete": false })
                        })
                            .then(function (res) { return res.json(); })
                            .then(function (data) { return console.log(data); })["catch"](function (error) { return console.error(error); })];
                case 1:
                    _a.sent();
                    renderGradeList(studentID);
                    displayStudents();
                    input.value = "";
                    return [2 /*return*/];
            }
        });
    });
}
window.addEventListener("click", function (e) {
    var _a, _b;
    var target = e.target;
    if (target.id === "closeEditWindow") {
        editWindow.style.display = "none";
    }
    if (target.classList.contains("fa-pen-to-square")) {
        var id = (_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
        openEditWindow(id);
    }
});
