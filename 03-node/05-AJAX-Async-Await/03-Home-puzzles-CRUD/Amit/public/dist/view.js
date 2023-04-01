function renderStudents(students) {
    try {
        if (!students)
            throw new Error("No students");
        var html = students
            .map(function (student) {
            return "<div class=\"StudentCard\">\n          <p contenteditable oninput=\"handleStudentNameUpdate(event, '" + student._id + "')\">" + student.name + "</p>\n          <div class=\"StudentCard__grades\">grades:\n            <div id=\"studentGradesRoot-" + student._id + "\"></div>\n          </div>  \n          <button onclick='handleDeleteStudent(\"" + student._id + "\")'>DELETE</button>\n          </div>\n          ";
        })
            .join(" ");
        var studentsRoot = document.querySelector("#studentsRoot");
        if (!studentsRoot)
            throw new Error("studentsRoot not found on DOM");
        studentsRoot.innerHTML = html;
        renderGrades(students);
    }
    catch (error) {
        console.error(error);
    }
}
function renderGrades(students) {
    try {
        students.map(function (_student) {
            try {
                var _id_1 = _student._id;
                var student = students.find(function (student) { return student._id === _id_1; });
                if (!student)
                    throw new Error("student not found");
                console.log(student.grades);
                var html = student.grades
                    .map(function (grade) {
                    console.log(grade);
                    return renderGrade(grade);
                })
                    .join(" ");
                var gradesRoot = document.querySelector("#studentGradesRoot-" + _id_1);
                if (!gradesRoot)
                    throw new Error("gradesRoot not found on DOM");
                gradesRoot.innerHTML = html;
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
function renderGrade(grade) {
    try {
        var html = "<div class=\"StudentCard__grade\">\n              <p contenteditable oninput=\"handleGradeUpdate(event, '" + grade._id + "')\">" + grade.test + ": " + grade.value + " </p>\n              <div id=\"gradeRoot-" + grade._id + "\"></div>\n              <button onclick='handleDeleteGrade(\"" + grade._id + "\")'>DELETE</button>\n              </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
