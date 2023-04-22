import { Student } from "../../API/students/studentsModel";

function renderStudentTable(student: Student) {
  try {
    if (!student) throw new Error("No student found");
    const html = `
               <tr class="studentRow">
                 <td>${student._id}<button onclick='handleDeleteStudent("${
                    student._id
                  }")'>delete</button>
                  </td>
                 <td contenteditable oninput="handleStudentNameUpdate(event, '${
                   student._id
                 }')">${student.name}</td>
                 <td>${student.lastName}</td>
                 <td>${student.courses
                   .map((course) => course.name)
                   .join(", ")}</td>
                 <td>${student.grades.join(", ")}</td>

                 </tr>`;
    const studentRoot = document.querySelector("#customers");
    if (!studentRoot) throw new Error("student Root not found");
    studentRoot.innerHTML += html;
  } catch (error) {
    console.error(error);
  }
}

function handelStudent() {
  try {
     getStudents()
     .then(({students}) => students.forEach( (student) => {
        getStudentCourses(
        student.courses as unknown as string[]
      )
      .then(({courses}) =>{
        getStudentGrades(student._id.toString())
        .then(({grades}) =>{
          renderStudentTable({...student, courses, grades:grades.map(grade =>grade.grade)})

        }) 
      })
    }));
  } catch (error) {
    console.error(error);
  }
}

async function getStudents(){
  const response = await fetch("/api/students/get-students");
  return await response.json();
}

async function getStudentCourses(ids: string[]) {
  const response = await fetch(
    "/api/courses/get-courses-by-ids?" +
      new URLSearchParams({ ids: ids.join(",") }).toString()
  );
  return await response.json();
}

async function getStudentGrades(studentId: string) {
  const response = await fetch(
    "/api/grades/get-grades?" + new URLSearchParams({ studentId }).toString()
  );
  return await response.json();
}

function handleDeleteStudent(_id: string) {
  try {
    fetch(
      "/api/students/delete-student?" + new URLSearchParams({ _id }).toString(),
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        const studentForm = document.getElementById(_id);

        if (!studentForm) {
          throw new Error("student delete form HTML");
        }
        studentForm.remove();
      })

      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

