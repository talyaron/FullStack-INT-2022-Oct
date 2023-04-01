function renderStudents(students: Student[]) {
    try {
        if (!students) throw new Error("No students");

        const html = students
            .map((student) => {
                return `<div class="StudentCard">
          <p contenteditable oninput="handleStudentNameUpdate(event, '${student._id}')">${student.name}</p>
          <div class="StudentCard__grades">grades:
            <div id="studentGradesRoot-${student._id}"></div>
          </div>  
          <button onclick='handleDeleteStudent("${student._id}")'>DELETE</button>
          </div>
          `;
            })
            .join(" ");

        const studentsRoot = document.querySelector("#studentsRoot");
        if (!studentsRoot) throw new Error("studentsRoot not found on DOM");

        studentsRoot.innerHTML = html;

        renderGrades(students);

    } catch (error) {
        console.error(error)
    }
}



function renderGrades(students: Student[]) {
    try {

        students.map((_student) => {
            try {
                const _id = _student._id
                const student = students.find((student) => student._id === _id);
                if (!student) throw new Error("student not found");
                console.log(student.grades);
                
            
                const html = student.grades
                    .map((grade) => {
                        console.log(grade);
                        
                        return renderGrade(grade);
                    })
                    .join(" ");

                const gradesRoot = document.querySelector(`#studentGradesRoot-${_id}`);
                if (!gradesRoot) throw new Error("gradesRoot not found on DOM");

                gradesRoot.innerHTML = html;
            } catch (error) {
                console.error(error)
            }
        })


    } catch (error) {
        console.error(error)
    }
}



function renderGrade(grade: Grade) {
    try {
        const html = `<div class="StudentCard__grade">
              <p contenteditable oninput="handleGradeUpdate(event, '${grade._id}')">${grade.test}: ${grade.value} </p>
              <div id="gradeRoot-${grade._id}"></div>
              <button onclick='handleDeleteGrade("${grade._id}")'>DELETE</button>
              </div>`;

        return html;
    } catch (error) {
        console.error(error);
        return null;
    }
}