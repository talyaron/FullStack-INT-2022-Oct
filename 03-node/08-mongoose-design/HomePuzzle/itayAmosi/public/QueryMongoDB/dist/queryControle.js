"use strict";
exports.__esModule = true;
function handleDeleteStudent(_id) {
    try {
        fetch("/api/students/delete-student?" + new URLSearchParams({ _id: _id }).toString(), {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function () {
            var studentForm = document.getElementById(_id);
            if (!studentForm) {
                throw new Error("student delete form HTML");
            }
            studentForm.remove();
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
        fetch("/api/teachers/delete-teacher?" + new URLSearchParams({ _id: _id }).toString(), {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function () {
            var teacherId = document.getElementById(_id);
            if (!teacherId) {
                throw new Error("teacher delete from HTML");
            }
            teacherId.remove();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleStudentNameUpdate(ev, _id) {
    try {
        var name = ev.target.textContent;
        fetch("/api/students/update-student-name?" + new URLSearchParams({ name: name, _id: _id }).toString(), {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleTeacherNameUpdate(ev, _id) {
    try {
        var name = ev.target.textContent;
        fetch("/api/teachers/update-teacher-name?" + new URLSearchParams({ name: name, _id: _id }).toString(), {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
// async function findStudents(){
//     const searchBar = document.querySelector("#search") as HTMLInputElement;
//     const input = searchBar.textContent;
//     const user = await StudentModel.find({input});
//     const response = await fetch("/api/students/find-students");
//     return await response.json();
//   }
