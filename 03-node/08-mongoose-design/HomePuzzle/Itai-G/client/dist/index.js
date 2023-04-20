"use strict";
exports.__esModule = true;
var addStudentForm = document.getElementById("addStudentForm");
if (addStudentForm) {
    addStudentForm.addEventListener("submit", handleAddStudent);
}
function handleAddStudent(event) {
    var _a;
    event.preventDefault();
    var form = event.target;
    var name = (_a = form.elements.namedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
    if (!name) {
        console.error("No name provided");
        return;
    }
    var newStudent = { name: name };
    fetch("/api/students/add-student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudent)
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to add student");
        }
        console.log("Success:", response);
        alert("Student added successfully!");
        form.reset();
    })["catch"](function (error) {
        console.error("Error:", error);
        alert("Failed to add student.");
    });
}
// function getStudents() {
//   fetch("/api/students/get-students")
//     .then((res) => res.json())
//     .then((data) => {
//       const studentsList = document.querySelector("#studentsList");
//       if (!studentsList) throw new Error("error studentsList");
//       studentsList.innerHTML = "";
//       // let html = "";
//       // data.students.forEach((student) => {
//       //   html += `<option value="${student._id}">${student.name}</option>`;
//       // });
//       const studentSelect = document.querySelector("#student");
//       studentSelect.innerHTML = html;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
function getStudents() {
    fetch("/api/students/get-students")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var studentsList = document.querySelector("#studentsList");
        if (!studentsList)
            throw new Error("error studentsList");
        studentsList.innerHTML = "";
        var html = "";
        data.students.forEach(function (student) {
            html += "<tr>\n        <td>" + student.name + "</td>\n        <td><input type=\"text\" id=\"update-name-" + student._id + "\" value=\"" + student.name + "\" /></td>\n        <td><button onClick=\"handleUpdateStudent('" + student._id + "')\">Update</button></td>\n        <td><button onClick=\"handleDeleteStudent('" + student._id + "')\">Delete</button></td>\n     </tr>\n     <br>";
        });
        studentsList.innerHTML = html;
    })["catch"](function (error) {
        console.error(error);
    });
}
function handleDeleteStudent(_id) {
    console.log(_id);
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
            .then(function () {
            getStudents();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateStudent(_id) {
    var _a;
    console.log(_id);
    var updatedName = (_a = document.getElementById("update-name-" + _id)) === null || _a === void 0 ? void 0 : _a.value;
    if (!updatedName) {
        alert("Please enter a name");
        return;
    }
    try {
        fetch("/api/students/update-student-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id, updatedName: updatedName })
        })
            .then(function (res) { return res.json(); })
            .then(function () {
            getStudents();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// function handleAddCourse(event) {
//   event.preventDefault();
//   const courseElement = document.querySelector("#course");
//   const studentElement = document.querySelector("#student");
//   if (!courseElement || !studentElement) {
//     console.error("Error: course or student element not found");
//     return;
//   }
//   const newcourse: any = {course , studentId}
//   fetch("/api/courses/add-course", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       courseName,
//       studentId,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const courseName = courseElement.value;
//       const studentId = studentElement.value;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
function renderselect(event, student) {
    try {
        console.log(student.name);
        var html = "\n  <option>" + student.name + "</option>\n  ";
        var select = document.querySelector("#select");
        if (!select) {
            throw new Error("no select");
        }
        select.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// function handelSelect(event){
//   try {
//     console.log(event)
//     fetch("/api/students/get-select")
//     .then((res) => res.json())
//     .then(({students}) => students.forEach((student) => {
//       renderselect(student.name)
//       console.log(student.name)
//     }));
//   } catch (error) {
//   }
// }
