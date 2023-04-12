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
function renderOptionsWithCourses() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/courses/get-courses')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (!data)
                        throw new Error("no found data");
                    return [2 /*return*/, data.courses.map(function (_a) {
                            var name = _a.name;
                            return name;
                        })];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetCurCourses(CourseName) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/courses/get-courses')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (!data)
                        throw new Error("no found data");
                    console.log('data', data);
                    return [2 /*return*/, data.courses.find(function (_a) {
                            var name = _a.name;
                            return name === CourseName;
                        })];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderAddCourse() {
    var addCourse = "\n    <div id=\"btnExit\">\n    <i class=\"fa-solid fa-xmark\" onclick=\"handleClickCloseWindows()\"></i>\n    </div>\n    <form class=\"app-container__main__form\" id=\"rootForm\" onsubmit=\"handleSubmitAddCourse(event)\">\n    <h3>ADD New Course</h3>\n    <input type=\"text\" placeholder=\"Enter Course Name\" name=\"CourseName\">\n \n    <input type=\"text\"  placeholder=\"Enter Teacher Course\" name=\"teacherCourse\">\n \n    <button type=\"submit\">ADD</button>\n    </form>\n    ";
    return addCourse;
}
function renderAddGrades() {
    return __awaiter(this, void 0, void 0, function () {
        var addGrade, options, optionsHtml, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    addGrade = '';
                    return [4 /*yield*/, renderOptionsWithCourses()];
                case 1:
                    options = _a.sent();
                    return [4 /*yield*/, options.map(function (name) { return "<option value=\"" + name + "\">" + name + " </option>"; }).join('')];
                case 2:
                    optionsHtml = _a.sent();
                    if (!optionsHtml) {
                        alert("no options . you must to  create course ");
                        return [2 /*return*/, addGrade = "\n           <div id=\"btnExit\">\n           <i class=\"fa-solid fa-xmark\" onclick=\"handleClickCloseWindows()\"></i>\n           </div>\n           <h4>You Must To Create Course</h4>\n           "];
                    }
                    else {
                        return [2 /*return*/, addGrade =
                                "\n           <div id=\"btnExit\">\n           <i class=\"fa-solid fa-xmark\" onclick=\"handleClickCloseWindows()\"></i>\n           </div>\n           <form class=\"app-container__main__form\" id=\"rootForm\" onsubmit=\"handleSubmitAddGrade(event)\">\n           <h3>ADD GRADE</h3>\n           <label for=\"_courseName\" >Enter Course Name</label>\n           <select id=\"_courseName\" placeholder=\"Enter Course Name\" name=\"courseName\" id=\"rootSelectOptions\">\n           " + optionsHtml + "\n           </select>\n           <input type=\"text\" placeholder=\"Enter Assignment Name\" name=\"assignmentName\">\n           <div>\n           <input type=\"number\" min=\"0\" max=\"100\" placeholder=\"Enter Score\" name=\"score\">\n           <input type=\"date\" name=\"date\" >\n           </div>\n           <button type=\"submit\">ADD</button>\n           </form>\n           "];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [2 /*return*/, ' '];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function grades() {
    return __awaiter(this, void 0, void 0, function () {
        var rootGrade, gradeDB, dataJson, html, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootGrade = document.getElementById('rootGrades');
                    return [4 /*yield*/, fetch('/grades/get-grades')];
                case 1:
                    gradeDB = _a.sent();
                    if (!gradeDB)
                        throw new Error('no found Grades DB');
                    return [4 /*yield*/, gradeDB.json()];
                case 2:
                    dataJson = _a.sent();
                    html = dataJson.grades.map(function (grade, index) {
                        return "\n            <div class=\"grade\">\n            <ul class=\"header-grades-main-list\">\n                <li class=\"header-grades-list__courseName\">" + (index + 1) + "</li>\n                <li class=\"header-grades-list__courseName\">OrelK</li>\n                <li class=\"header-grades-list__courseName\">" + grade.courseName.name + "</li>\n                <li class=\"header-grades-list__courseName\">" + grade.courseName.teacher.name + "</li>\n                <li class=\"header-grades-list__courseName\">" + grade.assignmentName + "</li>\n                <li class=\"header-grades-list__courseName\">" + grade.score + "</li>\n                <li class=\"header-grades-list__courseName\">" + grade.date + "</li>\n                <li class=\"header-grades-list__courseName buttonsEditRemove\">\n                    <i class=\"fa-solid fa-pen-to-square\" title=\"Edit Score\" onclick=\"handleClickEditGrade('" + grade._id + "')\"></i>\n                    <i class=\"fa-solid fa-delete-left\" onclick=\"handleClickDelGrade('" + grade._id + "')\"></i>\n                </li>\n            </ul>\n            </div>\n            ";
                    }).join('');
                    rootGrade.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
