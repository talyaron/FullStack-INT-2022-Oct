"use strict";
exports.__esModule = true;
function renderCourseTable(course) {
    try {
        if (!course)
            throw new Error("No course found");
        var html = "<table id=\"customers\">\n             <tr>\n               <td>" + course._id + "</td>\n               <td>---</td>\n               <td>---</td>\n               <td>" + course.name + "</td>\n               <td>---</td>\n               </tr>";
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
function handelCourse() {
    try {
        fetch("/api/courses/get-course")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var courses = _a.courses;
            try {
                if (!courses)
                    throw new Error("didnt find courses");
                courses.forEach(function (course) {
                    renderCourseTable(course);
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
