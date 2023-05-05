

function renderLoggedInUserName(userName){
    try {
      const userNameRoot: HTMLDivElement | null = document.querySelector("#userNameRoot")
      if(!userNameRoot) throw new Error("userNameRoot not found")

      userNameRoot.innerText = `welcome ${userName}`
    } catch (error) {
        console.error(error)
    }
}

function renderMovies(){
  try {
    fetch("/api/movies/get-movies") 
      .then((res) => res.json())
      .then(({ movies }) => {
        const moviesRoot: HTMLDivElement | null = document.querySelector("#moviesRoot")
        if(!moviesRoot) throw new Error("movies root not found on DOM")
        const html = movies.map((movie)=>{
          return`
          <button onclick="movieCookie('${movie._id}')">${movie.name}</button>
          `
        }).join(" ")

        moviesRoot.innerHTML = html
    });
  } catch (error) {
    console.error(error)
  }
}

//   function renderStudents(students: Student[]) {
//     try {
//         if (!students) throw new Error("No students");

//         const html = students
//             .map((student) => {
//                 return `
//           <div class="studentsContainer__studentCard">
//                 <div class="studentsContainer__studentCard__name">
//                     <button onclick="handleStudentNameUpdate('${student._id}')">update student name</button>
//                     <p id="studentName-${student._id}" contenteditable="false">${student.name}</p>
//                     <button id="saveNameBtn-${student._id}" onclick="handleSaveStudentNameUpdate('${student._id}')">save name</button>
//                 </div>    
//                 <div class="studentsContainer__studentCard__courses">courses:
//                     <form onsubmit="handleAddCourse(event, '${student._id}')">
//                         <input type="text" name="course" placeholder="course name" required>
//                         <button type="submit">add course</button>    
//                     </form>
//                 </div>
//                 <div id="courseRoot-${student._id}"></div> 
//                 <button onclick="handleDeleteStudent('${student._id}')">delete student</button>
//           </div>
//           `;
//             })
//             .join(" ");

//         const studentsRoot = document.querySelector("#studentsRoot");
//         if (!studentsRoot) throw new Error("studentsRoot not found on DOM");

//         studentsRoot.innerHTML = html;

//         renderCourses(students);

//     } catch (error) {
//         console.error(error)
//     }
// }

// function renderCourses(students: Student[]) {
//     try {
//         students.map((_student) => {
//             try {
//                 const _id = _student._id
//                 const student = students.find((student) => student._id === _id);
//                 if (!student) throw new Error("student not found");
                
//                 const html = student.courses
//                     .map((course) => {
                        
//                         return `
//                         <div class="studentsContainer__studentCard__courses__course">
//                             <div class="studentsContainer__studentCard__courses__course__name">
//                                 <button onclick="handleCourseUpdate('${course._id}')">update course</button>
//                                 <p id="course-${course._id}" contenteditable="false">${course.name}</p>
//                                 <button id="saveCourseBtn-${course._id}" onclick="handleSaveCourseUpdate('${course._id}', '${_student._id}')">save course</button>
//                             </div>    
//                             <button onclick='handleDeleteCourse("${course._id}", "${_student._id}")'>delete course</button>
//                             <div class="studentsContainer__studentCard__courses__course__grades" id="gradesRoot-${course._id}"></div>
//                             <button onclick="handleAddGrade('${course._id}', '${_student._id}')">add grade</button>
//                         </div>
//                         `;
//                     })
//                     .join(" ");

//                 const courseRoot = document.querySelector(`#courseRoot-${_id}`);
//                 if (!courseRoot) throw new Error("course Root not found on DOM");

//                 courseRoot.innerHTML = html;

//                 renderGrades(student.courses, student);

//             } catch (error) {
//                 console.error(error)
//             }
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }


// function renderGrades(courses: Course[], student: Student) {
//     try {
//         courses.map((_course) => {
//             try {
//                 const _id = _course._id
//                 const course = courses.find((course) => course._id === _id);
//                 if (!course) throw new Error("course not found");
//                 const courseIndex = courses.findIndex((course) => course._id === _id); 
//                 if ((!courseIndex) && (courseIndex!==0)) throw new Error("course Index not found");
                
//                 let Gradecounter:number = 0;
//                 const html = course.grades
//                     .map((grade) => {
//                         Gradecounter++;
//                         return `
//                             <div class="studentsContainer__studentCard__courses__course__grades__grade">
//                                 <div>#${Gradecounter}:</div>
//                                 <div id="grade-${grade._id}" contenteditable="true">${grade.grade ?? "___"}</div>
//                                 <button onclick="handleGradeUpdate('${grade._id}')">update grade</button>
//                                 <button onclick='handleSaveGradeUpdate("${course._id}", "${student._id}", "${grade._id}")'>save grade</button>
//                                 <button onclick='handleDeleteGrade("${course._id}", "${student._id}", "${grade._id}")'>delete grade</button>
//                             </div>
//                         `;
//                     })
//                     .join(" ");

//                 const gradesRoot = document.querySelector(`#gradesRoot-${_id}`);
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



