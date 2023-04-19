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
var tbsu = document.querySelector(".teacherbtn");
var sbsu = document.querySelector(".studentbtn");
tbsu.addEventListener("click", renderTeacher);
sbsu.addEventListener("click", renderStudent);
function renderTeacher() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "flex";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "none";
    var html = "\n <button class=\"goBackBtn\" onclick=\"hendelGoback()\">go back</button>\n    <form class=\"signup__formTeacher\">\n    <label for=\"tname\" class=\"signup__formTeacher__label\">Student Name</label>\n    <input id=\"nameInput\" type=\"text\" name=\"tname\" placeholder=\"enter name\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"temail\" class=\"signup__formTeacher__label\">Student Email</label>\n    <input id=\"nameEmail\" type=\"email\" name=\"temail\" placeholder=\"enter email\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"tpassword\" class=\"signup__formTeacher__label\">Student Password</label>\n    <input id=\"namePassword\" type=\"password\" name=\"tpassword\" placeholder=\"enter password\" required class=\"signup__formTeacher__inputt\">\n    <button type=\"button\" class=\"signUpBtn\" onclick=\"signUpBtn()\">Sign Up</button>\n </form>";
    divteacher.innerHTML = html;
}
function renderStudent() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "flex";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "none";
    var html = "\n    <button class=\"goBackBtn\" onclick=\"hendelGoback()\">go back</button>\n    <form class=\"signup__formTeacher\">\n    <label for=\"tname\" class=\"signup__formTeacher__label\">Student Name</label>\n    <input id=\"nameInput\" type=\"text\" name=\"tname\" placeholder=\"enter name\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"temail\" class=\"signup__formTeacher__label\">Student Email</label>\n    <input id=\"nameEmail\" type=\"email\" name=\"temail\" placeholder=\"enter email\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"tpassword\" class=\"signup__formTeacher__label\">Student Password</label>\n    <input id=\"namePassword\" type=\"password\" name=\"tpassword\" placeholder=\"enter password\" required class=\"signup__formTeacher__inputt\">\n    <button type=\"button\" class=\"signUpBtn\" onclick=\"signUpBtn()\">Sign Up</button>\n </form>\n ";
    divstudent.innerHTML = html;
}
function hendelGoback() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "block";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "none";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "none";
}
function signUpBtn() {
    return __awaiter(this, void 0, void 0, function () {
        var nameInput, namePassword, nameEmail, options, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nameInput = document.getElementById("nameInput");
                    namePassword = document.getElementById("namePassword");
                    nameEmail = document.getElementById("nameEmail");
                    options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Set-Cookie': 'token = 33'
                        },
                        body: JSON.stringify({ name: nameInput.value, password: namePassword.value, email: nameEmail.value })
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:3000/API/userLogin/signUp", options)];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 3:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    console.log("no");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
