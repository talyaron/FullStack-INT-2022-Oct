"use strict";

exports.__esModule = true;

var express_1 = require("express");

var uuid_1 = require("uuid");

var app = express_1["default"]();
app.use(express_1["default"]["static"]("./public"));
app.use(express_1["default"].json());

var Teacher =
/** @class */
function () {
  function Teacher(name, password) {
    this.name = name;
    this.password = password;
    this.uid = uuid_1.v4();
  }

  Teacher.prototype.getSimple = function () {
    return {
      uid: this.uid,
      name: this.name,
      password: this.password
    };
  };

  return Teacher;
}();

var teachers = [new Teacher("tal", 1235)];

function renderFormTeacher() {
  try {
    // if (!event) throw new Error("No form found");
    var html = "<div id=\"teacherForm\" class=\"form\">\n           <div class=\"title\">Welcome Back Teacher</div>\n           <div class=\"subtitle\">Please enter student data and grades!</div>\n           <div class=\"input-container ic1\">\n             <input id=\"studentName\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut\"></div>\n             <label for=\"studentName\" class=\"placeholder\">student name</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input id=\"EnglishC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"EnglishC\" class=\"placeholder\">English class</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input id=\"mathC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"mathC\" class=\"placeholder\">Math class</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input id=\"SportsC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"SportsC\" class=\"placeholder\">Sports class</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input id=\"HistoryC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"HistoryC\" class=\"placeholder\">History class</label>\n           </div>\n           <button type=\"submit\" class=\"submit\">submit</button>\n         </div>";
    var teacherRoot = document.querySelector("#teacherRoot");
    if (!teacherRoot) throw new Error("Grid container not found");
    teacherRoot.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

var teacherForm = document.querySelector("#teacherForm");
teacherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = event.target.elements.name.value;
  var englishClass = event.target.elements.englishClass.value;
  var mathClass = event.target.elements.mathClass.value;
  var sportsClass = event.target.elements.sportsClass.value;
  var historyClass = event.target.elements.historyClass.value;
  if (!name) throw new Error("can't find name");
  if (!englishClass) throw new Error("can't find englishClass");
  if (!mathClass) throw new Error("can't find mathClass");
  if (!sportsClass) throw new Error("can't find sportsClass");
  if (!historyClass) throw new Error("can't find historyClass");
  var newStudent = {
    name: name,
    englishClass: englishClass,
    mathClass: mathClass,
    sportsClass: sportsClass,
    historyClass: historyClass
  };
  console.log(newStudent);
  fetch("/api/add-student-grades", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newStudent)
  }).then(function (res) {
    return res.json();
  }).then(function () {
    event.target.reset();
  })["catch"](function (error) {
    console.error(error);
  });
});