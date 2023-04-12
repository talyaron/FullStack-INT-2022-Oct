"use strict";
exports.__esModule = true;
function renderTeacherTable(teacher) {
    try {
        if (!teacher)
            throw new Error("No student found");
        var html = "<table id=\"customers\">\n             <tr>\n               <td>" + teacher._id + " <button onclick='handleDeleteTeacher(\"" + teacher._id + "\")'>delete</button></td>\n               <td contenteditable oninput=\"handleTeacherNameUpdate(event, '" + teacher._id + "')\">" + teacher.name + "</td>\n               <td>" + teacher.lastName + "</td>\n               <td>" + teacher.course + "</td>\n               <td>---</td>\n               </tr>";
        var studentRoot = document.querySelector("#customers");
        if (!studentRoot)
            throw new Error("student Root not found");
        studentRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
// <td>${student.courses[`${GradeSchema}`]}</td>
function handelTeacher() {
    try {
        fetch("/api/teachers/get-teachers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var teachers = _a.teachers;
            try {
                if (!teachers)
                    throw new Error("didnt find teachers");
                teachers.forEach(function (teacher) {
                    renderTeacherTable(teacher);
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
