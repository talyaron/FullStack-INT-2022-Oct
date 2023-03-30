function addStudent(e) {
    try {
        e.preventDefault();
        var name = e.target.elements.studentName.value;
        var lastName = e.target.elements.studentLastName.value;
        var newStudent = { name: name, lastName: lastName };
        if (!newStudent || name == '' || lastName == '')
            throw new Error("No Student data");
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
            if (data.ok == false) {
                throw new Error("User already exists");
            }
            else {
                getStudents();
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function getStudents() {
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
    catch (error) { }
}
function renderStudents(studentsArray) {
    try {
        var avgGrade = 0;
        var gradesString = '';
        var studentsContainer = document.querySelector("#students_container");
        if (!studentsContainer)
            throw new Error("Couldn't catch studentsContainer");
        studentsContainer.innerHTML = '';
        for (var i = 0; i < studentsArray.length; i++) {
            avgGrade = 0;
            gradesString = '';
            // if (studentsArray[i].grades.length > 0){
            // }
            for (var j = 0; j < studentsArray[i].grades.length; j++) {
                avgGrade += parseInt(studentsArray[i].grades[j].gradePoints);
                gradesString += studentsArray[i].grades[j].gradeName + ": " + studentsArray[i].grades[j].gradePoints + "<br>";
            }
            if (studentsArray[i].grades.length > 0) {
                console.log(avgGrade);
                avgGrade = avgGrade / studentsArray[i].grades.length;
            }
            studentsContainer.insertAdjacentHTML("beforeend", "<div class=\"studentCard\" id=\"student-" + studentsArray[i].uid + "\"><h1 onchange=\"editStudent('" + studentsArray[i].uid + "')\" contenteditable>" + studentsArray[i].name + " " + studentsArray[i].lastName + "</h1><p>" + gradesString + "</p>\n            <p>Average Grade: " + avgGrade + "</p> <button id=\"addGradeBtn\" class=\"submitButton\" onclick=\"addGrade('" + studentsArray[i].uid + "')\">Add Grade</button>\n        </div>");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function addGrade(uid) {
    try {
        var student = document.querySelector("#student-" + uid);
        if (!student)
            throw new Error("couldn't catch Student!");
        student.insertAdjacentHTML('beforeend', "<div class=\"addGradeDiv\"><form class=\"formClass\" onsubmit=addGradeToStudent(event,'" + uid + "')><select name=\"gradeName\" id=\"gradeName\">\n        <option value=\"Mathematics\">Mathematics</option>\n        <option value=\"Programming\">Programming</option>\n        <option value=\"Engineering Physics\">Engineering Physics</option>\n        <option value=\"Python\">Python</option>\n        <option value=\"OOP\">OOP</option>\n        <option value=\"AI\">AI</option>\n        <option value=\"TypeScript\">TypeScript</option>\n        <option value=\"NodeJS\">NodeJS</option>\n        <option value=\"React\">React</option>\n        <option value=\"CSS\">CSS</option>\n    </select><input type=\"number\" name=\"gradePoints\" id=\"gradePoints\" placeholder=\"Grade Points\" value=0><input class=\"submitButton\" type=\"submit\" value=\"ADD\"></form> </div>");
    }
    catch (error) {
        console.error(error);
    }
}
function addGradeToStudent(e, uid) {
    try {
        e.preventDefault();
        var gradeName = e.target.elements.gradeName.value;
        var gradePoints = e.target.elements.gradePoints.value;
        fetch("/api/add-grade", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid, gradeName: gradeName, gradePoints: gradePoints })
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.ok == false) {
                throw new Error("Couldn't add grade");
            }
            else {
                getStudents();
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
    }
}
function editStudent(uid) {
    try {
        console.log('edit!');
        var student = document.querySelector("#student-" + uid);
        if (!student)
            throw new Error("No Student data");
        console.log(student);
        // fetch("/api/add-student", {
        //     method: "UPDATE",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(student),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.ok == false) {
        //             throw new Error("User already exists");
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    catch (error) {
        console.error(error);
    }
}
