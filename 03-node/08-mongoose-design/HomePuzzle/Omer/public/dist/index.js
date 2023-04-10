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
addEventListener("load", getStudents);
function formHandler(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, age, newStudent, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    console.log(ev);
                    name = ev.target.elements.name.value;
                    age = ev.target.elements.age.value;
                    newStudent = { name: name, age: age };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("/api/student/add-student", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name: name, age: age })
                        })];
                case 2:
                    response = _a.sent();
                    ev.target.reset();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("Success:", result);
                    getStudents();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function formCourseHandler(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    console.log(ev);
                    name = ev.target.elements.name.value;
                    return [4 /*yield*/, fetch("/api/course/add-course", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name: name })
                        })];
                case 1:
                    response = _a.sent();
                    ev.target.reset();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getStudents() {
    return __awaiter(this, void 0, void 0, function () {
        var response, students, html, display, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/student/get-students")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    students = _a.sent();
                    html = students.map(function (student) {
                        var courses = student.courses;
                        var coursesHtml = courses.map(function (course) {
                            return "\n                    <li>" + course.name + " <button onclick=\"deleteCourseFromStudent('" + course._id + "', '" + student._id + "')\">Delete Course</button></li>\n                ";
                        }).join(" ");
                        return "\n                <div class = \"student\">\n                    <h1>" + student.name + "</h1>\n                    <h2>" + student.age + "</h2>\n                    <lu>\n                        " + coursesHtml + "\n                    </lu>  \n                    <button onclick=\"handleDelete('" + student._id + "')\">Delete</button>\n                    <button onclick=\"addCourse('" + student._id + "')\">Add courses</button>  \n                </div>        \n            ";
                    }).join("");
                    display = document.getElementById("display");
                    if (!display)
                        throw new Error("Display not found");
                    display.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteCourseFromStudent(courseId, studentId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, students, response_1, result, error_4, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    return [4 /*yield*/, fetch("/api/student/get-students")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    students = _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, fetch("/api/student/delete-course", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ studentId: studentId, courseId: courseId })
                        })];
                case 4:
                    response_1 = _a.sent();
                    return [4 /*yield*/, response_1.json()];
                case 5:
                    result = _a.sent();
                    console.log("Success:", result);
                    return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    console.error("Error:", error_4);
                    return [3 /*break*/, 7];
                case 7:
                    getStudents();
                    return [3 /*break*/, 9];
                case 8:
                    error_5 = _a.sent();
                    console.error("Error:", error_5);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function getCourses() {
    return __awaiter(this, void 0, void 0, function () {
        var response, courses, html, display, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/course/get-courses")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    courses = _a.sent();
                    console.log(courses);
                    html = courses.map(function (course) {
                        return "\n            <h1>" + course.name + "</h1>\n            <button onclick=\"deleteCourse('" + course._id + "')\">Delete</button>\n            ";
                    }).join("");
                    display = document.getElementById("display");
                    if (!display)
                        throw new Error("Display not found");
                    display.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error("Error:", error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteCourse(courseId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/course/delete-course", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ courseId: courseId })
                        })];
                case 1:
                    response = _a.sent();
                    getCourses();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.error("Error:", error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addCourse(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var addCourse_1, response, courses_1, htmlSelect_1, html, btn, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    addCourse_1 = document.getElementById("addCourse");
                    if (!addCourse_1)
                        throw new Error("addCourse not fount");
                    addCourse_1.innerHTML = "";
                    return [4 /*yield*/, fetch("/api/course/get-courses")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    courses_1 = _a.sent();
                    console.log(courses_1);
                    htmlSelect_1 = document.createElement("select");
                    html = courses_1.map(function (course) {
                        var option = document.createElement("option");
                        option.innerText = course.name;
                        option.value = course._id;
                        return option;
                    });
                    html.forEach(function (option) {
                        htmlSelect_1.appendChild(option);
                    });
                    addCourse_1.appendChild(htmlSelect_1);
                    btn = document.createElement("button");
                    btn.innerText = "Add";
                    addCourse_1.appendChild(btn);
                    btn.addEventListener("click", function () {
                        addCourseHelper(htmlSelect_1.value, courses_1, _id);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error("Error:", error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addCourseHelper(_id, courses, student_id) {
    return __awaiter(this, void 0, void 0, function () {
        var addCourse_2, index, course, response, result, error_9, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    addCourse_2 = document.getElementById("addCourse");
                    if (!addCourse_2)
                        throw new Error("addCourse not fount");
                    addCourse_2.innerHTML = "";
                    index = courses.findIndex(function (course) { return _id == course._id; });
                    if (index == -1)
                        throw new Error("course not found");
                    console.log(courses[index]);
                    course = courses[index];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("/api/student/add-course", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ course: course, student_id: student_id })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("Success:", result);
                    return [3 /*break*/, 5];
                case 4:
                    error_9 = _a.sent();
                    console.error("Error:", error_9);
                    return [3 /*break*/, 5];
                case 5:
                    getStudents();
                    return [3 /*break*/, 7];
                case 6:
                    error_10 = _a.sent();
                    console.error("Error:", error_10);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function handleDelete(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("/api/student/delete-student", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ _id: _id })
                        }).then(function (res) { return res.json(); }).then(function (students) {
                            getStudents();
                        })];
                case 1:
                    response = _a.sent();
                    console.log("Success:");
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _a.sent();
                    console.error("Error:", error_11);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
