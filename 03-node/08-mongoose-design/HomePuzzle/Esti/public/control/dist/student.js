function handleGetStudents() {
    try {
        console.log("test");
        fetch("/api/students/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didnt find students");
                console.log(students);
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
function renderStudents(students) {
    try {
        if (!students)
            throw new Error("No students");
        var html = students
            .map(function (student) {
            return renderStudent(student);
        })
            .join(" ");
        var studentsElement = document.querySelector("#students");
        if (!studentsElement)
            throw new Error("coundnt find students element on DOM");
        studentsElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderStudent(student) {
    try {
        console.log(student);
        return "<div class=\"studentCard\">\n            <img password=\"" + student.password + "\" alt=\"student name is " + student.name + "\">\n            <p contenteditable oninput=\"handleStudentNameUpdate(event, '" + student.uid + "')\">" + student.name + "</p>\n            <button onclick='handleDeleteStudent(\"" + student._id + "\")'>DELETE</button>\n            </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handleStudentNameUpdate(ev, uid) {
    try {
        console.log(uid);
        var name = ev.target.textContent;
        fetch("/api/students/update-student-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, uid: uid })
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
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No password");
        var newStudent = { name: name, password: password };
        //send to server:
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
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteStudent(_id) {
    try {
        console.log(_id);
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
