function handleGetstudents() {
    console.log("test");
    try {
        fetch("/api/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didnt find students");
                console.log(students);
                renderstudents(students);
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
function renderstudents(students) {
    try {
        if (!students)
            throw new Error("No students");
        var html = students
            .map(function (student) {
            return renderstudent(student);
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
function renderstudent(student) {
    try {
        return "<div class=\"studentCard\">\n              <p> " + student.name + "</p>\n              <p contenteditable oninput=\"handlestudentNameUpdate(event, '" + student.uid + "')\">" + student.name + "</p>\n              <button onclick='handleDeletestudent(\"" + student.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handlestudentNameUpdate(ev, uid) {
    try {
        console.log(uid);
        var name = ev.target.textContent;
        fetch("/api/update-student-name", {
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
function handleAddstudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var email = ev.target.elements.email.value;
        if (!name)
            throw new Error("No name");
        if (!email)
            throw new Error("No email");
        var newstudent = { name: name, email: email };
        //send to server:
        fetch("/api/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newstudent)
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
function handleDeletestudent(uid) {
    try {
        console.log(uid);
        fetch("/api/delete-student", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderstudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
