function handleGetTeachers() {
    try {
        // console.log("XXXXXXXXXXXXXXXXXXXXXXX");
        fetch("/api/teachers/get-teachers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var teachers = _a.teachers;
            try {
                if (!teachers)
                    throw new Error("didnt find teachers");
                console.log(teachers);
                renderTeachers(teachers);
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
function renderTeachers(teachers) {
    try {
        if (!teachers)
            throw new Error("No teachers");
        var html = teachers
            .map(function (teacher) {
            return renderTeacher(teacher);
        })
            .join(" ");
        var teachersElement = document.querySelector(".teacher");
        if (!teachersElement)
            throw new Error("coundnt find teachers element on DOM");
        teachersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTeacher(teacher) {
    try {
        console.log(teacher);
        return "<div class=\"teacherCard\">\n            <img password=\"" + teacher.password + "\" alt=\"teacher name is " + teacher.name + "\">\n            <p contenteditable oninput=\"handleTeacherNameUpdate(event, '" + teacher.uid + "')\">" + teacher.name + "</p>\n            <button onclick='handleDeleteTeacher(\"" + teacher._id + "\")'>DELETE</button>\n            </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handleTeacherNameUpdate(ev, uid) {
    try {
        console.log(uid);
        var name = ev.target.textContent;
        fetch("/api/teachers/update-teacher-name", {
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
function handleAddTeacher(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No password");
        var newTeacher = { name: name, password: password };
        //send to server:
        fetch("/api/teachers/add-teacher", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeacher)
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
function handleDeleteTeacher(_id) {
    try {
        console.log(_id);
        fetch("/api/teachers/delete-teacher", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var teachers = _a.teachers;
            renderTeachers(teachers);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
