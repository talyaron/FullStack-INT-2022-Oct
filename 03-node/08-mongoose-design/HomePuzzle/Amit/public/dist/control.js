///////////////////////students/////////////////////
function handleGetStudents() {
    try {
        fetch("/api/students/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didn't find students");
                renderStudents(students);
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
function handleAddStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        if (!name)
            throw new Error("No name on form");
        var newStudent = { name: name };
        fetch("/api/students/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteStudent(_id) {
    try {
        fetch("/api/students/delete-student", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleStudentNameUpdate(_id) {
    try {
        var studentName = document.querySelector("#studentName-" + _id);
        if (!studentName)
            throw new Error("student name not found on DOM");
        studentName.contentEditable = "true";
        studentName.style.color = "yellow";
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveStudentNameUpdate(_id) {
    try {
        var studentName = document.querySelector("#studentName-" + _id);
        if (!studentName)
            throw new Error("student name not found on DOM");
        studentName.contentEditable = "false";
        studentName.style.color = "black";
        var updatedName = studentName.innerText;
        fetch("/api/students/update-student-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id, updatedName: updatedName })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
///////////////////////courses/////////////////////
function handleAddCourse(ev, studentId) {
    try {
        ev.preventDefault();
        var course = ev.target.elements.course.value;
        if (!studentId)
            throw new Error("No studentId in form");
        if (!course)
            throw new Error("No course in form");
        var data = { course: course, studentId: studentId };
        fetch("/api/courses/add-course", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteCourse(courseId, studentId) {
    try {
        fetch("/api/courses/delete-course", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ courseId: courseId, studentId: studentId })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleCourseUpdate(_id) {
    try {
        var course = document.querySelector("#course-" + _id);
        if (!course)
            throw new Error("course name not found on DOM");
        course.contentEditable = "true";
        course.style.color = "yellow";
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveCourseUpdate(courseId, studentId) {
    try {
        var course = document.querySelector("#course-" + courseId);
        if (!course)
            throw new Error("course not found on DOM");
        course.contentEditable = "false";
        course.style.color = "black";
        var updatedCourse = course.innerText;
        fetch("/api/courses/update-course", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ courseId: courseId, studentId: studentId, updatedCourse: updatedCourse })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
