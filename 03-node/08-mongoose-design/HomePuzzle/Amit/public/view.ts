function renderStudents(students: Student[]) {
    try {
        if (!students) throw new Error("No students");

        const html = students
            .map((student) => {
                return `
          <div class="studentsContainer__studentCard">
            <div class="studentsContainer__studentCard__name">
                <button onclick="handleStudentNameUpdate('${student._id}')">update student name</button>
                <p id="studentName-${student._id}" contenteditable=false >${student.name}</p>
                <button id="saveNameBtn-${student._id}" onclick="handleSaveStudentNameUpdate('${student._id}')">save name</button>
            </div>    
            <div class="studentsContainer__studentCard__courses">courses:
            <form onsubmit="handleAddCourse(event, '${student._id}')">
                <input type="text" name="course" placeholder="course name" required>
                <button type="submit">add course</button>    
            </form>
            <div id="courseRoot-${student._id}"></div>
          </div>  
          <button onclick="handleDeleteStudent('${student._id}')">DELETE</button>
          </div>
          `;
            })
            .join(" ");

        const studentsRoot = document.querySelector("#studentsRoot");
        if (!studentsRoot) throw new Error("studentsRoot not found on DOM");

        studentsRoot.innerHTML = html;

        renderCourses(students);

    } catch (error) {
        console.error(error)
    }
}

function renderCourses(students: Student[]) {
    try {
        
        students.map((_student) => {
            try {
                console.log("_student._id in render students", _student._id);
                
                const _id = _student._id
                const student = students.find((student) => student._id === _id);
                if (!student) throw new Error("student not found");
                
                const html = student.courses
                    .map((course) => {
                        
                        return `<div class="studentsContainer__studentCard__courses__course">
                        <p contenteditable oninput="handleCourseUpdate(event, '${course._id}')">${course.name}</p>
                        <div id="gradesRoot-${course._id}"></div>
                        <button onclick='handleDeleteCourse("${course._id}", "${_student._id}")'>DELETE</button>
                        </div>`;
                    })
                    .join(" ");

                const courseRoot = document.querySelector(`#courseRoot-${_id}`);
                if (!courseRoot) throw new Error("course Root not found on DOM");

                courseRoot.innerHTML = html;

                // renderGrades(course._id);

            } catch (error) {
                console.error(error)
            }
        })
    } catch (error) {
        console.error(error)
    }
}


// function renderGrades(courses: Course[]) {
//     try {
//         students.map((_student) => {
//             try {
//                 const _id = _student._id
//                 const student = students.find((student) => student._id === _id);
//                 if (!student) throw new Error("student not found");
                
//                 const html = student.grades
//                     .map((grade) => {
                        
//                         return `<div class="studentsContainer__StudentCard__grade">
//                         <p contenteditable oninput="handleGradeUpdate(event, '${grade._id}')">${grade.test}: ${grade.value} </p>
//                         <div id="gradeRoot-${grade._id}"></div>
//                         <button onclick='handleDeleteGrade("${grade._id}")'>DELETE</button>
//                         </div>`;
//                     })
//                     .join(" ");

//                 const gradesRoot = document.querySelector(`#studentGradesRoot-${_id}`);
//                 if (!gradesRoot) throw new Error("gradesRoot not found on DOM");

//                 gradesRoot.innerHTML = html;
//             } catch (error) {
//                 console.error(error)
//             }
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }



