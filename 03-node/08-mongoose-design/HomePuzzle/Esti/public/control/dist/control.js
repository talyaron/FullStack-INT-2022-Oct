function hendelGoBack() {
    window.location.reload();
}
function hendelAddTeacher(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!email)
            throw new Error("No email");
        if (!password)
            throw new Error("No password");
        var newTeacher = { name: name, email: email, password: password };
        //send to server:
        fetch("/API/teacher/add-Teacher", {
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
function hendelAddStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!email)
            throw new Error("No email");
        if (!password)
            throw new Error("No password");
        var newStudent = { name: name, email: email, password: password };
        //send to server:
        fetch("/API/student/add-Student", {
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
function hendelSingIn(studentTeachrName) {
    try {
        // console.log("PPPPPPPPPPPPPPPPPPPPPPPPPP")
        console.log(studentTeachrName);
        if (studentTeachrName === "teacher")
            handleGetTeachers();
        if (studentTeachrName === "student")
            handleGetStudents();
    }
    catch (error) {
        console.error(error);
    }
}
