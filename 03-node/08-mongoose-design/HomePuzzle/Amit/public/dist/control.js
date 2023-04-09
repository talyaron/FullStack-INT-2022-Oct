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
        console.log("newStudent", newStudent);
        fetch("/api/students/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddCourse(ev, studentId) {
    try {
        console.log("studentId", studentId);
        ev.preventDefault();
        var course = ev.target.elements.course.value;
        if (!studentId)
            throw new Error("No studentId in form");
        if (!course)
            throw new Error("No course in form");
        var data = { course: course, studentId: studentId };
        console.log("data", data);
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
            console.log(students);
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
