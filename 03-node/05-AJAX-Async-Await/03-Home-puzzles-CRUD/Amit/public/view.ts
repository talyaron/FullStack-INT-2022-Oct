function renderStudents(students: Student[]) {
    try {
        if (!students) throw new Error("No students");

        const html = students
            .map((student) => {
                return `<div class="StudentCard">
          <p contenteditable oninput="handleStudentNameUpdate(event, '${student.uid}')">${student.name}</p>
          <div id="studentGradesRoot-${student.uid}"></div>
          <button onclick='handleDeleteStudent("${student.uid}")'>DELETE</button>
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
                const uid = _student.uid
                const student = students.find((student) => student.uid === uid);
                if (!student) throw new Error("student not found");

                const html = student.grades
                    .map((grade) => {
                        return renderGrade(grade);
                    })
                    .join(" ");

                const gradesRoot = document.querySelector(`#studentGradesRoot-${uid}`);
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
              <p contenteditable oninput="handleGradeUpdate(event, '${grade.uid}')">${grade.test}: ${grade.value} </p>
              <div id="gradeRoot-${grade.uid}"></div>
              <button onclick='handleDeleteGrade("${grade.uid}")'>DELETE</button>
              </div>`;

        return html;
    } catch (error) {
        console.error(error);
        return null;
    }
}