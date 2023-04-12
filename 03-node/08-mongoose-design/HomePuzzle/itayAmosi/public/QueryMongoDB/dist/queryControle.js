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
                throw new Error("Could not find student form");
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
                throw new Error("Could not find teacherID");
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
        console.log({ name: name, _id: _id });
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
        console.log({ name: name, _id: _id });
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
