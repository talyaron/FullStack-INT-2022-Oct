"use strict";
exports.__esModule = true;
function renderGradeTable(grade) {
    try {
        if (!grade)
            throw new Error("No grade found");
        var html = "<table id=\"customers\">\n             <tr>\n               <td>" + grade._id + "</td>\n               <td>---</td>\n               <td>---</td>\n               <td>" + grade.gradCourse + "</td>\n               <td>" + grade.grade + "</td>\n               </tr>";
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
function handelGrade() {
    try {
        fetch("/api/grades/get-grades")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var grades = _a.grades;
            try {
                if (!grades)
                    throw new Error("didnt find grades");
                grades.forEach(function (grade) {
                    renderGradeTable(grade);
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
