function renderStudents(students) {
    try {
        if (!students)
            throw new Error("No students");
        var html = students
            .map(function (student) {
            return "<div class=\"StudentCard\">\n          <p contenteditable oninput=\"handleStudentNameUpdate(event, '" + student.uid + "')\">" + student.name + "</p>\n          <div id=\"studentGradesRoot-" + student.uid + "\"></div>\n          <button onclick='handleDeleteStudent(\"" + student.uid + "\")'>DELETE</button>\n          </div>\n          ";
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
                var uid_1 = _student.uid;
                var student = students.find(function (student) { return student.uid === uid_1; });
                if (!student)
                    throw new Error("student not found");
                var html = student.grades
                    .map(function (grade) {
                    return renderGrade(grade);
                })
                    .join(" ");
                var gradesRoot = document.querySelector("#studentGradesRoot-" + uid_1);
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
        var html = "<div class=\"StudentCard__grade\">\n              <p contenteditable oninput=\"handleGradeUpdate(event, '" + grade.uid + "')\">" + grade.test + ": " + grade.value + " </p>\n              <div id=\"gradeRoot-" + grade.uid + "\"></div>\n              <button onclick='handleDeleteGrade(\"" + grade.uid + "\")'>DELETE</button>\n              </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
