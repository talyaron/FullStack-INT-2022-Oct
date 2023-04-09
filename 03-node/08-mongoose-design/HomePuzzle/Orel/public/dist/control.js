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
//  HANDLE functions Close
// OPEN CLOSE COLLAPSE WINDOWS
function handleClickCloseWindows() {
    try {
        var containerToClose = document.querySelector('#rootContainerGradeChange');
        containerToClose.classList.remove('active');
    }
    catch (error) {
        console.error(error);
    }
}
function openWindowsForm(html) {
    var containerToClose = document.querySelector('#rootContainerGradeChange');
    containerToClose.classList.add('active');
    containerToClose.innerHTML = html;
}
//  HANDLE functions LIST
function handleCollapseMenuBtn() {
    try {
        var navBar = document.querySelector('.app-container__header__navbar');
        navBar.classList.toggle('active');
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickViewGrades() {
    try {
        handleClickCloseWindows();
        // openWindowsForm()
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickAddCourse(ev) {
    try {
        var html = renderAddCourse();
        openWindowsForm(html);
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickAddGrades(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, renderAddGrades()];
                case 1:
                    html = (_a.sent()).toString();
                    openWindowsForm(html);
                    return [2 /*return*/];
            }
        });
    });
}
///handle  submit ////////////////////////////////////////
function handleChangeUserName() {
    var rootUsersLogoSpan = document.querySelector('.app-container__header__iconUser-name');
    if (confirm("Are you sure to Change You Name ? ")) {
        var newName = prompt("What Is your New Name ?");
        if (newName === null)
            return;
        rootUsersLogoSpan.innerHTML = newName;
        console.log("Implement delete functionality here");
    }
    else {
        return;
    }
}
function handleSubmitAddGrade(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var courseName, curCourse, curTeacher, assignmentName, score, date, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    courseName = ev.target.elements.courseName.value;
                    return [4 /*yield*/, GetCurCourses(courseName)];
                case 1:
                    curCourse = _a.sent();
                    console.log(curCourse);
                    curTeacher = curCourse.teacher;
                    assignmentName = ev.target.elements.assignmentName.value;
                    score = ev.target.elements.score.value;
                    date = ev.target.elements.date.value;
                    if (!courseName)
                        throw new Error("No courseName");
                    if (!curCourse)
                        throw new Error("No curCourse");
                    if (!assignmentName)
                        throw new Error("No teacherCourse");
                    if (!score)
                        throw new Error("No score");
                    if (!date)
                        throw new Error("No date");
                    //send to server:
                    return [4 /*yield*/, fetch("/grades/add-grade", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ courseName: curCourse, teacherName: curTeacher, assignmentName: assignmentName, score: score, date: date })
                        })
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                            console.log(data);
                        })["catch"](function (error) {
                            console.error(error.message);
                        })];
                case 2:
                    //send to server:
                    _a.sent();
                    grades();
                    handleClickCloseWindows();
                    ev.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleSubmitAddCourse(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var courseName, teacherCourse, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    courseName = ev.target.elements.CourseName.value;
                    teacherCourse = ev.target.elements.teacherCourse.value;
                    if (!courseName)
                        throw new Error("No courseName");
                    if (!teacherCourse)
                        throw new Error("No teacherCourse");
                    //send to server:
                    return [4 /*yield*/, fetch("/courses/add-course", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ courseName: courseName, teacherCourse: teacherCourse })
                        })
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                            console.log(data);
                        })["catch"](function (error) {
                            console.error(error.message);
                        })];
                case 1:
                    //send to server:
                    _a.sent();
                    handleClickCloseWindows();
                    ev.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getAverageFromDB() {
    return __awaiter(this, void 0, void 0, function () {
        var gradeDB, dataJson, average, averageHtml, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/grades/get-grades')];
                case 1:
                    gradeDB = _a.sent();
                    if (!gradeDB)
                        throw new Error('no found Grades DB');
                    return [4 /*yield*/, gradeDB.json()];
                case 2:
                    dataJson = _a.sent();
                    average = dataJson.grades.reduce(function (accumulator, currentValue) {
                        return Number(accumulator) + Number(currentValue.score);
                    }, 0);
                    if (average) {
                        averageHtml = document.getElementById('average');
                        averageHtml.innerText = (average / Number(dataJson.grades.length)).toFixed(2).toString();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getAverageFromDB();
