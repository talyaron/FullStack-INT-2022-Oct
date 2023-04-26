function renderNavBar() {
    var html = "<ul class=\"navUl\">\n    <li id=\"1\">\u05DC\u05D5\u05D7 \u05E2\u05D1\u05D5\u05D3\u05D4</li>\n    <li id=\"2\">\u05D4\u05E1\u05D1\u05E8</li>\n    <li id=\"3\">\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DC\u05DE\u05D9\u05D3</li>\n    <li id=\"4\">\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05E6\u05D5\u05E2</li>\n    <li id=\"5\">\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D9\u05D5\u05DF</li>\n    <li id=\"6\">\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D5\u05E8\u05D4</li>\n    </ul>";
    var newdiv = document.createElement("div");
    var navbar = document.querySelector(".navbar");
    newdiv.innerHTML = html;
    navbar.appendChild(newdiv);
    renderListNavBar();
}
function htmlLogBorad() {
    var main = document.querySelector(".main");
    var html = "<h1>borad</h1>";
    main.innerHTML = html;
}
function htmlExplain() {
    var main = document.querySelector(".main");
    var html = "<h2> \n       \u05DE\u05D5\u05E8\u05D4 \u05D9\u05E7\u05E8!!!\n       \u05E2\u05D9\u05D3\u05DB\u05D5\u05DF , \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05DA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05DE\u05D9\u05D3\u05E2 \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\u05D9\u05DD , \u05E6\u05D9\u05D5\u05E0\u05D9\u05D4\u05DD \u05D5\u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D5\u05EA \u05D0\u05D5\u05EA\u05DD \u05D4\u05DD \u05DC\u05D5\u05DE\u05D3\u05D9\u05DD.\n       \u05E4\u05E9\u05D5\u05D8 \u05D4\u05D5\u05E1\u05E3 \u05EA\u05DC\u05DE\u05D9\u05D3 \u05D1\u05D7\u05E8 \u05E6\u05D9\u05D5\u05DF \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2 \u05D5\u05DE\u05D5\u05E8\u05D4 \u05DE\u05DC\u05DE\u05D3, \u05E9\u05D9\u05DD \u05DC\u05D1 \u05D1\u05DB\u05DC \u05E9\u05DC\u05D1 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05D3\u05DB\u05D5\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD</h2>";
    main.innerHTML = html;
}
function htmlAddStudent() {
    var main = document.querySelector(".main");
    var html = " <form action=\"post\" class=\"addStudentForm\">\n        <h2 class=\"addStudentForm__h2f\">\u05D4\u05D5\u05E1\u05E3 \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8 \u05D7\u05D3\u05E9</h2>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD\" class=\"addStudentForm__inp\">\n        <br>\n        <input type=\"text\" required placeholder=\"\u05DE\u05E9\u05E4\u05D7\u05D4\" class=\"addStudentForm__inp\">\n        <br>\n        <input type=\"tel\" required placeholder=\"\u05D8\u05DC\u05E4\u05D5\u05DF\" class=\"addStudentForm__inp\">\n        <br>\n        <input type=\"email\" required placeholder=\"\u05DE\u05D9\u05D9\u05DC\" class=\"addStudentForm__inp\">\n        <br>\n        <button type=\"submit\" class=\"addStudentForm__btn\">\u05D4\u05D5\u05E1\u05E3</button>\n    </form>";
    main.innerHTML = html;
}
function htmlAddPro() {
    var main = document.querySelector(".main");
    var html = "<form class=\"addStudentForm\" >\n        <h2 class=\"addStudentForm__h2f\">\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05E6\u05D5\u05E2</h2>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\" class=\"addStudentForm__inp\">    \n        <br>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\" class=\"addStudentForm__inp\">\n        <br>\n        <button type=\"submit\" class=\"addStudentForm__btn\">\u05D4\u05D5\u05E1\u05E3</button>\n        </form>";
    main.innerHTML = html;
}
function htmlAddGrade() {
    var main = document.querySelector(".main");
    var html = "<form class=\"addStudentForm\">\n        <h2 class=\"addStudentForm__h2f\">\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D9\u05D5\u05DF</h2>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\" class=\"addStudentForm__inp\">    \n        <br>\n        <input type=\"text\" required placeholder=\"\u05E6\u05D9\u05D5\u05DF\" class=\"addStudentForm__inp\">\n        <br>\n        <button type=\"submit\" class=\"addStudentForm__btn\">\u05D4\u05D5\u05E1\u05E3</button>\n        </form>";
    main.innerHTML = html;
}
function htmlAddTeacher() {
}
