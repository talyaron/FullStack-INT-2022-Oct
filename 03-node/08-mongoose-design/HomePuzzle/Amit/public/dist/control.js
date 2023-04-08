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
function handleAddCourse(ev, _id) {
    try {
        console.log("_id", _id);
        ev.preventDefault();
        var course = ev.target.elements.test.value;
        if (!_id)
            throw new Error("No _id in form");
        if (!course)
            throw new Error("No course in form");
        var newCourse = { course: course };
        console.log("newCourse", newCourse);
        fetch("/api/courses/add-course", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCourse)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data", data);
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
