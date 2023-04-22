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
exports.__esModule = true;
function renderStudentTable(student) {
    try {
        if (!student)
            throw new Error("No student found");
        var html = "\n               <tr class=\"studentRow\">\n                 <td>" + student._id + "\n                  <button onclick='handleDeleteStudent(\"" + student._id + "\")'>delete</button>\n                  </td>\n                 <td contenteditable oninput=\"handleStudentNameUpdate(event, '" + student._id + "')\">" + student.name + "</td>\n                 <td>" + student.lastName + "</td>\n                 <td>" + student.courses
            .map(function (course) { return course.name; })
            .join(", ") + "</td>\n                 <td>" + student.grades.join(", ") + "</td>\n\n                 </tr>";
        var studentRoot = document.querySelector("#customers");
        if (!studentRoot)
            throw new Error("student Root not found");
        studentRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTeacherTable(teacher) {
    try {
        if (!teacher)
            throw new Error("No student found");
        var html = "\n             <tr class=\"teacherRow\">\n               <td>" + teacher._id + " <button onclick='handleDeleteTeacher(\"" + teacher._id + "\")'>delete</button></td>\n               <td contenteditable oninput=\"handleTeacherNameUpdate(event, '" + teacher._id + "')\">" + teacher.name + "</td>\n               <td>" + teacher.lastName + "</td>\n               <td>" + teacher.courses
            .map(function (course) { return course.name; })
            .join(", ") + "</td>\n               <td>---</td>\n               </tr>";
        var studentRoot = document.querySelector("#customers");
        if (!studentRoot)
            throw new Error("student Root not found");
        studentRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleStudentNameUpdate(ev, _id) {
    try {
        var name = ev.target.textContent;
        fetch("/api/students/update-student-name?" +
            new URLSearchParams({ name: name, _id: _id }).toString(), {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleTeacherNameUpdate(ev, _id) {
    try {
        var name = ev.target.textContent;
        fetch("/api/teachers/update-teacher-name?" +
            new URLSearchParams({ name: name, _id: _id }).toString(), {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearchByUid(event) {
    var _a;
    try {
        var value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
        document.querySelectorAll(".studentRow, .teacherRow").forEach(function (row) {
            row.remove();
        });
        if (!value) {
            handleStudentSearch({});
            handleTeacherSearch({});
            return;
        }
        handleStudentSearch({ _id: value });
        handleTeacherSearch({ _id: value });
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearchByName(event) {
    var _a;
    try {
        var value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
        document.querySelectorAll(".studentRow, .teacherRow").forEach(function (row) {
            row.remove();
        });
        if (!value) {
            handleStudentSearch({});
            handleTeacherSearch({});
            return;
        }
        handleStudentSearch({ name: value });
        handleTeacherSearch({ name: value });
    }
    catch (error) {
        console.error(error);
    }
}
function handleStudentSearch(query) {
    getStudents(query).then(function (_a) {
        var students = _a.students;
        if (!students) {
            return;
        }
        students.forEach(function (student) {
            getCourses(student.courses).then(function (_a) {
                var courses = _a.courses;
                getStudentGrades(student._id.toString()).then(function (_a) {
                    var grades = _a.grades;
                    renderStudentTable(__assign(__assign({}, student), { courses: courses, grades: grades.map(function (grade) { return grade.grade; }) }));
                });
            });
        });
    });
}
function handleTeacherSearch(query) {
    getTeachers(query).then(function (_a) {
        var teachers = _a.teachers;
        if (!teachers) {
            return;
        }
        teachers.forEach(function (teacher) {
            getCourses(teacher.courses).then(function (_a) {
                var courses = _a.courses;
                renderTeacherTable(__assign(__assign({}, teacher), { courses: courses }));
            });
        });
    });
}
function getStudents(query) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/students/get-students?" + new URLSearchParams(query).toString();
                    console.log(url);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getTeachers(query) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/teachers/get-teachers?" + new URLSearchParams(query).toString())];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getCourses(ids) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/courses/get-courses-by-ids?" +
                        new URLSearchParams({ ids: ids.join(",") }).toString())];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getStudentGrades(studentId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/grades/get-grades?" + new URLSearchParams({ studentId: studentId }).toString())];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
