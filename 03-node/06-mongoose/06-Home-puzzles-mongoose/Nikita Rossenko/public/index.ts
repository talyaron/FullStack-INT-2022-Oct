function addStudent(e) {
    try {
        e.preventDefault();
        const name = e.target.elements.studentName.value;
        const lastName = e.target.elements.studentLastName.value;
        const newStudent: any = { name, lastName };
        if (!newStudent || name == '' || lastName == '') throw new Error("No Student data");

        fetch("/api/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok == false) {
                    throw new Error("User already exists");
                } else {
                    getStudents()
                }
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}

function getStudents() {
    try {
        fetch("/api/get-students")
            .then((res) => res.json())
            .then(({ students }) => {
                try {
                    if (!students) throw new Error("didnt find students");
                    renderStudents(students);
                } catch (error) {
                    console.error(error);
                }
            });
    } catch (error) {}
}

function renderStudents(studentsArray: any) {
    try {
        let avgGrade = 0
        let gradesString = ''
        const studentsContainer = document.querySelector("#students_container");
        if (!studentsContainer) throw new Error("Couldn't catch studentsContainer");
        studentsContainer.innerHTML = ''

        for (let i = 0; i < studentsArray.length; i++) {
            avgGrade = 0
            gradesString = ''
            // if (studentsArray[i].grades.length > 0){

            // }
            for (let j = 0 ; j < studentsArray[i].grades.length ; j++){
                avgGrade += parseInt(studentsArray[i].grades[j].gradePoints)
                gradesString += `${studentsArray[i].grades[j].gradeName}: ${studentsArray[i].grades[j].gradePoints}<br>`
            }
            if (studentsArray[i].grades.length > 0){
                console.log(avgGrade)
                avgGrade = avgGrade / studentsArray[i].grades.length
            }
            studentsContainer.insertAdjacentHTML(
                "beforeend",
                `<div class="studentCard" id="student-${studentsArray[i].uid}"><h1 onchange="editStudent('${studentsArray[i].uid}')" contenteditable>${studentsArray[i].name} ${studentsArray[i].lastName}</h1><p>${gradesString}</p>
            <p>Average Grade: ${avgGrade}</p> <button id="addGradeBtn" class="submitButton" onclick="addGrade('${studentsArray[i].uid}')">Add Grade</button>
        </div>`
            );
        }
    } catch (error) {
        console.error(error);
    }
}

function addGrade(uid){
    try {
        const student = document.querySelector(`#student-${uid}`)
        if (!student) throw new Error("couldn't catch Student!")
        student.insertAdjacentHTML('beforeend', `<div class="addGradeDiv"><form class="formClass" onsubmit=addGradeToStudent(event,'${uid}')><select name="gradeName" id="gradeName">
        <option value="Mathematics">Mathematics</option>
        <option value="Programming">Programming</option>
        <option value="Engineering Physics">Engineering Physics</option>
        <option value="Python">Python</option>
        <option value="OOP">OOP</option>
        <option value="AI">AI</option>
        <option value="TypeScript">TypeScript</option>
        <option value="NodeJS">NodeJS</option>
        <option value="React">React</option>
        <option value="CSS">CSS</option>
    </select><input type="number" name="gradePoints" id="gradePoints" placeholder="Grade Points" value=0><input class="submitButton" type="submit" value="ADD"></form> </div>`)
    } catch (error) {
        console.error(error)
    }
}

function addGradeToStudent(e:any,uid:string){
    try {
        e.preventDefault();
        const gradeName = e.target.elements.gradeName.value;
        const gradePoints = e.target.elements.gradePoints.value;
        fetch("/api/add-grade", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({uid,gradeName,gradePoints}),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok == false) {
                    throw new Error("Couldn't add grade");
                }
                else{
                    getStudents();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        
    }
}

function editStudent(uid){
    try {
        console.log('edit!')
        const student = document.querySelector(`#student-${uid}`)
        if (!student) throw new Error("No Student data");
        console.log(student)

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
    } catch (error) {
        console.error(error);
    }

}