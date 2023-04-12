function renderStudentTable(StudentSchema) {
    try {
        if (!StudentSchema)
            throw new Error("No student found");
        var html = "<table id=\"customers\">\n               <tr>\n                 <td>" + StudentSchema._id + " <button onclick='handleDeleteStudent(\"" + StudentSchema._id + "\")'>delete</button></td>\n                 <td contenteditable oninput=\"handleStudentNameUpdate(event, '" + StudentSchema._id + "')\">" + StudentSchema.name + "</td>\n                 <td>" + StudentSchema.lastName + "</td>\n                 <td>" + StudentSchema.CourseSchema + "</td>\n                 <td>" + StudentSchema.GradeSchema + "</td>\n                 </tr>";
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
function handelStudent() {
    try {
        fetch("/api/students/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didnt find student");
                students.forEach(function (student) {
                    renderStudentTable(student);
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
