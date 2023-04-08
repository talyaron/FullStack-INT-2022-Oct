function renderStudents(students) {
    try {
        if (!students)
            throw new Error("No students");
        var html = students
            .map(function (student) {
            return "<div class=\"StudentCard\">\n          <p contenteditable oninput=\"handleStudentNameUpdate(event, '" + student._id + "')\">" + student.name + "</p>\n          <div class=\"StudentCard__courses\">courses:\n            <form onsubmit=\"handleAddCourse(event, '" + student._id + "')\">\n                <input type=\"text\" name=\"course\" placeholder=\"course name\" required>\n                <button type=\"submit\">add course</button>    \n            </form>\n            <div id=\"courseRoot-" + student._id + "\"></div>\n          </div>  \n          <button onclick=\"handleDeleteStudent('" + student._id + "')\">DELETE</button>\n          </div>\n          ";
        })
            .join(" ");
        var studentsRoot = document.querySelector("#studentsRoot");
        if (!studentsRoot)
            throw new Error("studentsRoot not found on DOM");
        studentsRoot.innerHTML = html;
        renderCourses(students);
    }
    catch (error) {
        console.error(error);
    }
}
function renderCourses(students) {
    try {
        students.map(function (_student) {
            try {
                console.log("_student.courses", _student.courses);
                var _id_1 = _student._id;
                var student = students.find(function (student) { return student._id === _id_1; });
                if (!student)
                    throw new Error("student not found");
                var html = student.courses
                    .map(function (course) {
                    return "<div class=\"StudentCard__courses__course\">\n                        <p contenteditable oninput=\"handleCourseUpdate(event, '" + course._id + "')\">" + course.name + "</p>\n                        <div id=\"gradesRoot-" + course._id + "\"></div>\n                        <button onclick='handleDeleteCourse(\"" + course._id + "\")'>DELETE</button>\n                        </div>";
                })
                    .join(" ");
                var courseRoot = document.querySelector("#courseRoot-" + _id_1);
                if (!courseRoot)
                    throw new Error("course Root not found on DOM");
                courseRoot.innerHTML = html;
                // renderGrades(course._id);
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
// function renderGrades(courses: Course[]) {
//     try {
//         students.map((_student) => {
//             try {
//                 const _id = _student._id
//                 const student = students.find((student) => student._id === _id);
//                 if (!student) throw new Error("student not found");
//                 const html = student.grades
//                     .map((grade) => {
//                         return `<div class="StudentCard__grade">
//                         <p contenteditable oninput="handleGradeUpdate(event, '${grade._id}')">${grade.test}: ${grade.value} </p>
//                         <div id="gradeRoot-${grade._id}"></div>
//                         <button onclick='handleDeleteGrade("${grade._id}")'>DELETE</button>
//                         </div>`;
//                     })
//                     .join(" ");
//                 const gradesRoot = document.querySelector(`#studentGradesRoot-${_id}`);
//                 if (!gradesRoot) throw new Error("gradesRoot not found on DOM");
//                 gradesRoot.innerHTML = html;
//             } catch (error) {
//                 console.error(error)
//             }
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }
