function handleGetStudents() {
    try {
        fetch("/api/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didnt find students");
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
function addStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddUser(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        if (!name)
            throw new Error("No name");
        if (!src)
            throw new Error("No src");
        var newUser = { name: name, src: src };
        //send to server:
        fetch("/api/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
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
