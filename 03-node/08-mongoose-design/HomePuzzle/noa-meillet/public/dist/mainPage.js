function handleGetStudents() {
    try {
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
        return "<div class=\"studentCard\">\n              <h3>First name: " + student.name + "</h3>\n              <h3>Family name: " + student.familyName + "</h3>\n              <h3>Phone number: " + student.phone + "</h3>\n              <button onclick='handleDeletestudent(\"" + student.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
/*
function handleUserNameUpdate(ev: any, uid: string) {
  try {
    console.log(uid);
    const name = ev.target.textContent;
    fetch("/api/users/update-user-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uid }),
    });
  } catch (error) {
    console.error(error);
  }
}
*/
function handleAddStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var familyName = ev.target.elements.familyName.value;
        var phoneNumber = ev.target.elements.phoneNumber.value;
        if (!name)
            throw new Error("No name");
        if (!familyName)
            throw new Error("No family name");
        if (!phoneNumber)
            throw new Error("No phone number");
        var newStudent = { name: name, familyName: familyName, phoneNumber: phoneNumber };
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
