"use strict";
exports.__esModule = true;
var addStudentForm = document.getElementById('addStudentForm');
if (addStudentForm) {
    addStudentForm.addEventListener('submit', handleAddStudent);
}
function handleAddStudent(event) {
    var _a;
    event.preventDefault();
    var form = event.target;
    var name = (_a = form.elements.namedItem('name')) === null || _a === void 0 ? void 0 : _a.value;
    if (!name) {
        console.error('No name provided');
        return;
    }
    var newStudent = { name: name };
    fetch('/api/students/add-student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Failed to add student');
        }
        console.log('Success:', response);
        alert('Student added successfully!');
        form.reset();
    })["catch"](function (error) {
        console.error('Error:', error);
        alert('Failed to add student.');
    });
}
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
            html += "<tr>\n          <td>" + student.name + "</td>\n          <td><input type=\"text\" id=\"update-name-" + student._id + "\" value=\"" + student.name + "\" /></td>\n          <td><button onClick=\"handleUpdateStudent('" + student._id + "')\">Update</button></td>\n          <td><button onClick=\"handleDeleteStudent('" + student._id + "')\">Delete</button></td>\n       </tr>\n       <br><br>";
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
// const addCourse = document.querySelector("#add-course-form") as HTMLFormElement;
// addCourse.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const course = document.getElementById('course').value;
//   const studentId = document.getElementById('student').value;
//   const response = await fetch('/api/students/add-course', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ course, studentId })
//   });
//   if (response.ok) {
//     const data = await response.json();
//     const courses = data.courses;
//   } else {
//     const error = await response.json();
//     console.error(error);
//   }
// });
