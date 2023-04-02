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
function handleAddStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        if (!name)
            throw new Error("No name");
        var newStudent = { name: name };
        fetch("/api/add-student", {
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
function handleAddGrade(ev, uid) {
    try {
        ev.preventDefault();
        var test = ev.target.elements.test.value;
        var value = ev.target.elements.value.valueAsNumber;
        if (!uid)
            throw new Error("No uid in form");
        if (!test)
            throw new Error("No name in form");
        if (!value)
            throw new Error("No value in form");
        var newGrade = { test: test, value: value };
        var _id = { uid: uid };
        console.log(_id);
        fetch("/api/add-grade", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(_id, newGrade)
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
