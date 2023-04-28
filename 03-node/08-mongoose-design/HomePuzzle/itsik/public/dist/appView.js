// the navbar
function renderNavBar() {
    var html = "<ul class=\"navUl\">\n    <li id=\"1\">\u05DC\u05D5\u05D7 \u05E2\u05D1\u05D5\u05D3\u05D4</li>\n    <li id=\"2\">\u05D4\u05E1\u05D1\u05E8</li>\n    <li id=\"3\">\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DC\u05DE\u05D9\u05D3</li>\n    <li id=\"4\">\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05E6\u05D5\u05E2</li>\n    <li id=\"5\">\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D9\u05D5\u05DF</li>\n    <li id=\"6\">\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D5\u05E8\u05D4</li>\n    </ul>";
    var newdiv = document.createElement("div");
    var navbar = document.querySelector(".navbar");
    newdiv.innerHTML = html;
    navbar.appendChild(newdiv);
    renderListNavBar();
}
//  borad for working
function htmlLogBorad() {
    var main = document.querySelector(".main");
    main.style.alignItems = "normal";
    main.style.margin = "100px 0px";
    var html = "<div class=\"maintable\">\n        <table class=\"bordTable\">\n            <thead>\n                <tr>\n                <th>\u05E9\u05DD</th>\n                <th>\u05DE\u05E9\u05E4\u05D7\u05D4</th>\n                <th>\u05DE\u05D9\u05D9\u05DC</th>\n                <th>\u05D8\u05DC\u05E4\u05D5\u05DF</th>\n                <th>\u05E7\u05D5\u05E8\u05E1</th>\n                <th>\u05E6\u05D9\u05D5\u05DF</th>\n            </tr>\n            </thead>\n             <tbody>\n                   <tr>\n                        <td>\u05D3\u05D5\u05D2\u05DE\u05D4</td>  \n                        <td>\u05DC\u05EA\u05DC\u05DE\u05D9\u05D3</td>  \n                        <td>student@gmail.com</td>  \n                        <td>0501234567</td>  \n                        <td>\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA</td>  \n                        <td>82</td>  \n                        <td><button id=\"tbtn\">\u05E2\u05D9\u05D3\u05DB\u05D5\u05DF</button></td>  \n                        <td><button id=\"tbtn\">\u05DE\u05D7\u05D9\u05E7\u05D4</button></td>  \n                      </tr>\n             </tbody>\n        </table>\n    </div>";
    main.innerHTML = html;
}
function htmlExplain() {
    var main = document.querySelector(".main");
    main.style.alignItems = "center";
    var html = "<h2> \n       \u05DE\u05D5\u05E8\u05D4 \u05D9\u05E7\u05E8!!!\n       \u05E2\u05D9\u05D3\u05DB\u05D5\u05DF , \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05DA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05DE\u05D9\u05D3\u05E2 \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\u05D9\u05DD , \u05E6\u05D9\u05D5\u05E0\u05D9\u05D4\u05DD \u05D5\u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D5\u05EA \u05D0\u05D5\u05EA\u05DD \u05D4\u05DD \u05DC\u05D5\u05DE\u05D3\u05D9\u05DD.\n       \u05E4\u05E9\u05D5\u05D8 \u05D4\u05D5\u05E1\u05E3 \u05EA\u05DC\u05DE\u05D9\u05D3 \u05D1\u05D7\u05E8 \u05E6\u05D9\u05D5\u05DF \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2 \u05D5\u05DE\u05D5\u05E8\u05D4 \u05DE\u05DC\u05DE\u05D3, \u05E9\u05D9\u05DD \u05DC\u05D1 \u05D1\u05DB\u05DC \u05E9\u05DC\u05D1 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05D3\u05DB\u05D5\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD</h2>";
    main.innerHTML = html;
}
function htmlAddStudent() {
    var main = document.querySelector(".main");
    main.style.alignItems = "center";
    var html = " <form class=\"addStudentForm\" onsubmit=\"handleAddUser(event)\">\n        <h2 class=\"addStudentForm__h2f\">\u05D4\u05D5\u05E1\u05E3 \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8 \u05D7\u05D3\u05E9</h2>\n        <input type=\"text\" name=\"name\" required placeholder=\"\u05E9\u05DD\" class=\"addStudentForm__inp\">\n        <br>\n        <input type=\"text\" name=\"fname\" required placeholder=\"\u05DE\u05E9\u05E4\u05D7\u05D4\" class=\"addStudentForm__inp\">\n        <br>\n        <input type=\"tel\" name=\"phone\" required placeholder=\"\u05D8\u05DC\u05E4\u05D5\u05DF\" class=\"addStudentForm__inp\">\n        <br>\n        <input type=\"email\" name=\"email\" required placeholder=\"\u05DE\u05D9\u05D9\u05DC\" class=\"addStudentForm__inp\">\n        <br>\n        <button type=\"submit\" class=\"addStudentForm__btn\">\u05D4\u05D5\u05E1\u05E3</button>\n    </form>";
    main.innerHTML = html;
}
function htmlAddPro() {
    var main = document.querySelector(".main");
    main.style.alignItems = "center";
    var html = "<form class=\"addStudentForm\" >\n        <h2 class=\"addStudentForm__h2f\">\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05E6\u05D5\u05E2</h2>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\" class=\"addStudentForm__inp\">    \n        <br>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\" class=\"addStudentForm__inp\">\n        <br>\n        <button type=\"submit\" class=\"addStudentForm__btn\">\u05D4\u05D5\u05E1\u05E3</button>\n        </form>";
    main.innerHTML = html;
}
function htmlAddGrade() {
    var main = document.querySelector(".main");
    main.style.alignItems = "center";
    var html = "<form class=\"addStudentForm\">\n        <h2 class=\"addStudentForm__h2f\">\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D9\u05D5\u05DF</h2>\n        <input type=\"text\" required placeholder=\"\u05E9\u05DD \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\" class=\"addStudentForm__inp\">    \n        <br>\n        <input type=\"text\" required placeholder=\"\u05E6\u05D9\u05D5\u05DF\" class=\"addStudentForm__inp\">\n        <br>\n        <button type=\"submit\" class=\"addStudentForm__btn\">\u05D4\u05D5\u05E1\u05E3</button>\n        </form>";
    main.innerHTML = html;
}
function htmlAddTeacher() {
}
