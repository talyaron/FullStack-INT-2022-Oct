function renderStudentDiv(student) {
    try {
        if (!student)
            throw new Error("No student Root div found");
        var html = "<div id=\"" + student.uid + "\" class=\"form\">\n             <div class=\"title\">Welcome To Student Grades</div>\n             <div class=\"subtitle\">This is the list of your grades in classes</div>\n             <div id=\"window\" class=\"input-container ic1\">\n               <h2 contenteditable oninput=\"handleStudentNameUpdate(event, '" + student.uid + "')\">" + student.name + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum1\">\n               <h2>English class:" + student.englishClass + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum2\">\n               <h2>math class\":" + student.mathClass + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum3\">\n               <h2>Sports class:" + student.sportsClass + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum4\">\n               <h2>History class:" + student.historyClass + "</h2>\n             </div>\n             <div id=\"avgRoot\" class=\"input-container ic2\">\n               <h2>Yor Average is:" + student.avg + "</h2>\n             </div>\n             <button class=\"submit\" onclick='handleDeleteStudent(\"" + student.uid + "\")'>DELETE</button>\n             </div>";
        var studentRoot = document.querySelector("#studentRoot");
        if (!studentRoot)
            throw new Error("student Root not found");
        studentRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
;
// <button id="avgBtn" type="submit" class="submit" onclick="calc(event);">Average</button>
function handelStudent() {
    try {
        fetch("/api/students/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didnt find student");
                students.forEach(function (student) {
                    renderStudentDiv(student);
                });
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
function handleDeleteStudent(uid) {
    try {
        fetch("/api/students/delete-student", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid })
        })
            .then(function () {
            var studentForm = document.getElementById(uid);
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
function handleStudentNameUpdate(ev, uid) {
    try {
        console.log(uid);
        var name = ev.target.textContent;
        fetch("/api/students/update-student-name", {
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
