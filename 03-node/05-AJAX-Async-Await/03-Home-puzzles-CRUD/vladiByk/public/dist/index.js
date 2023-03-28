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
var Student = /** @class */ (function () {
    function Student(name, grades) {
        if (grades === void 0) { grades = []; }
        this.name = name;
        this.grades = grades;
        this.uuid = (Math.random() * 100000000000000).toString();
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.getAverage = function () {
        return this.grades.reduce(function (a, b) { return a + b; }, 0) / this.grades.length;
    };
    return Student;
}());
var fetchStudents = function () {
    var list = fetch("/api/v1/students").then(function (res) { return res.json(); });
    return list;
};
var displayStudents = function () { return __awaiter(_this, void 0, void 0, function () {
    var studentList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchStudents()
                    .then(function (data) {
                    var studentsJson = data.students;
                    return studentsJson.map(function (student) { return (student = new Student(student.name, student.grades)); });
                })["catch"](function (err) { return console.error(err); })];
            case 1:
                studentList = _a.sent();
                // console.log(studentList);
                if (studentList)
                    renderStudents(studentList);
                return [2 /*return*/];
        }
    });
}); };
displayStudents();
var renderStudents = function (students) { return __awaiter(_this, void 0, void 0, function () {
    var html, deleteBtn;
    return __generator(this, function (_a) {
        html = students
            .map(function (student) {
            return "<div class=\"studentDiv\">\n        <b>" + student.name + "</b>\n        <span>Average: " + student.getAverage() + "</span>\n        <div class=\"crudIcons\">\n          <i class=\"fa-regular fa-trash-can\"></i>\n          <i class=\"fa-regular fa-pen-to-square\"></i>\n         </div>\n        </div>";
        })
            .join("");
        root.innerHTML = html;
        deleteBtn = document.querySelectorAll(".fa-trash-can");
        return [2 /*return*/];
    });
}); };
var addNewStudent = function (e) { return __awaiter(_this, void 0, void 0, function () {
    var studentName, studentGrade, newStudent, studentList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                studentName = document.querySelector("#fullName");
                studentGrade = document.querySelector("#grade");
                if (!studentName.value || !studentGrade.value) {
                    return [2 /*return*/, alert("Missing input field...")];
                }
                newStudent = new Student(studentName.value);
                newStudent.addGrade(Number(studentGrade.value));
                return [4 /*yield*/, fetchStudents()
                        .then(function (_a) {
                        var students = _a.students;
                        return students.map(function (student) { return new Student(student.name, student.grades); });
                    })["catch"](function (err) { return console.error(err); })];
            case 1:
                studentList = _a.sent();
                studentList.push(newStudent);
                studentName.value = "";
                studentGrade.value = "";
                fetch("/api/v1/students", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(studentList)
                })
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    console.log(data);
                })["catch"](function (error) {
                    console.error(error);
                });
                renderStudents(studentList);
                return [2 /*return*/];
        }
    });
}); };
addStudentBtn.addEventListener("click", addNewStudent);
