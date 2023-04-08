function renderFormTeacher() {
    try {
        var divElement = document.createElement('form');
        divElement.setAttribute("class", 'form');
        divElement.setAttribute("id", 'teacherForm');
        divElement.innerHTML = "\n           <div  class=\"title\">Welcome Back Teacher</div>\n           <div class=\"subtitle\">Please enter student data and grades!</div>\n           <div class=\"input-container ic1\">\n             <input name=\"studentName\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut\"></div>\n             <label for=\"studentName\" class=\"placeholder\">student name</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input name=\"englishC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"englishC\" class=\"placeholder\">English class</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input name=\"mathC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"mathC\" class=\"placeholder\">Math class</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input name=\"sportsC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"sportsC\" class=\"placeholder\">Sports class</label>\n           </div>\n           <div class=\"input-container ic2\">\n             <input name=\"historyC\" class=\"input\" type=\"text\" placeholder=\" \" />\n             <div class=\"cut cut-short\"></div>\n             <label for=\"historyC\" class=\"placeholder\">History class</label>\n           </div>\n           <button type=\"submit\" class=\"submit\">submit</button>\n           <button class=\"submit\" onclick=\"addMockStudent()\">add mock student</button>\n";
        var teacherRoot = document.querySelector("#teacherRoot");
        if (!teacherRoot)
            throw new Error("Grid container not found");
        teacherRoot.appendChild(divElement);
        handleSubmit(divElement);
    }
    catch (error) {
        console.error(error);
    }
}
function addMockStudent() {
    fetch("/api/students/add-mock-student", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
function handleSubmit(doc) {
    doc.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(event.target.elements.studentName);
        var name = event.target.elements.studentName.value;
        var englishClass = event.target.elements.englishC.value;
        var mathClass = event.target.elements.mathC.value;
        var sportsClass = event.target.elements.sportsC.value;
        var historyClass = event.target.elements.historyC.value;
        if (!name)
            throw new Error("can't find name");
        if (!englishClass)
            throw new Error("can't find englishClass");
        if (!mathClass)
            throw new Error("can't find mathClass");
        if (!sportsClass)
            throw new Error("can't find sportsClass");
        if (!historyClass)
            throw new Error("can't find historyClass");
        var newStudent = {
            name: name,
            englishClass: englishClass,
            mathClass: mathClass,
            sportsClass: sportsClass,
            historyClass: historyClass
        };
        console.log(newStudent);
        fetch("/api/students/add-student-grades", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        })
            .then(function (res) { return res.json(); })
            .then(function () {
            event.target.reset();
        })["catch"](function (error) {
            console.error(error);
        });
    });
}
