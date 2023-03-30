function renderStudentDiv(student) {
    try {
        if (!student)
            throw new Error("No student Root div found");
        var html = "<div class=\"form\">\n             <div class=\"title\">Welcome To Student Grades</div>\n             <div class=\"subtitle\">This is the list of your grades in classes</div>\n             <div id=\"window\" class=\"input-container ic1\">\n               <h2>student name:" + student.name + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum1\">\n               <h2>English class:" + student.englishClass + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum2\">\n               <h2>math class\":" + student.mathClass + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum3\">\n               <h2>Sports class:" + student.sportsClass + "</h2>\n             </div>\n             <div id=\"window\" class=\"input-container ic2 windowNum4\">\n               <h2>History class:" + student.historyClass + "</h2>\n             </div>\n             <div id=\"avgRoot\" class=\"input-container ic2\">\n               <h2>Yor Average is:" + student.avg + "</h2>\n             </div>\n             <button id=\"avgBtn\" type=\"submit\" class=\"submit\" onclick=\"calc(event);\">Average</button>\n           </div>";
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
function handelStudent() {
    console.log("test");
    try {
        fetch("/api/get-students")
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
function handleAvgSubmit(doc) {
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
        fetch("/api/add-student-grades", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) { return res.json(); })
            .then(function () {
            event.target.reset();
        })["catch"](function (error) {
            console.error(error);
        });
    });
}
// function calc(event)
// {
// event.addEventListener("click",()=>{
//   const avgBtn = document.querySelector(`#avgBtn`) as HTMLButtonElement;
//   const n1 = parseFloat(document.getElementsByClassName('windowNum1').value);
//   const n2 = parseFloat(document.getElementsByClassName('windowNum2').value);
//   const n3 = parseFloat(document.getElementsByClassName('windowNum3').value);
//   const n4 = parseFloat(document.getElementsByClassName('windowNum4').value);
//   console.log(avgBtn);
//   if(avgBtn){
//     const oper = document.getElementById('avgRoot').value;
//     if(oper === '+')
//     {
//         document.getElementById('avgRoot').value = n1+n2+n3+n4 / 4;
//     }
//   }
// });
// }
