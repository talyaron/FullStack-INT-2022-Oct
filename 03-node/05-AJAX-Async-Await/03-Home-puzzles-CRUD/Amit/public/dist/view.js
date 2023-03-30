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
// function renderStudent(student: Student) {
//     try {
//         if(!student) throw new Error ("student not found");
//         if(!student.uid) throw new Error ("student uid not found");
//       const html =  `<div class="StudentCard">
//               <p contenteditable oninput="handleStudentNameUpdate(event, '${student.uid}')">${student.name}</p>
//               <div id="studentGradesRoot-${student.uid}"></div>
//               <button onclick='handleDeleteStudent("${student.uid}")'>DELETE</button>
//               </div>`;
//               return html;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
// }
function renderGrades(students) {
    try {
        // const student = students.find((student) => student.uid === uid);
        // if (!student) throw new Error("No student in array");
        var html = student.grades
            .map(function (grade) {
            return renderGrade(grade);
        })
            .join(" ");
        var gradesRoot = document.querySelector("#studentGradesRoot-" + uid);
        if (!gradesRoot)
            throw new Error("gradesRoot not found on DOM");
        gradesRoot.innerHTML = html;
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
