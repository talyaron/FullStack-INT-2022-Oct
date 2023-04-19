import StudentModel, {
  Student,
  StudentSchema,
} from "../../API/students/studentsModel";
import { Teacher } from "../../API/teachers/teachersModel";
function renderStudentTable(student: Student) {
  try {
    if (!student) throw new Error("No student found");
    const html = `
               <tr class="studentRow">
                 <td>${student._id}
                  <button onclick='handleDeleteStudent("${
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
function renderTeacherTable(teacher: Teacher) {
  try {
    if (!teacher) throw new Error("No student found");
    const html = `
             <tr class="teacherRow">
               <td>${teacher._id} <button onclick='handleDeleteTeacher("${teacher._id}")'>delete</button></td>
               <td contenteditable oninput="handleTeacherNameUpdate(event, '${teacher._id}')">${teacher.name}</td>
               <td>${teacher.lastName}</td>
               <td>${teacher.courses
                .map((course) => course.name)
                .join(", ")}</td>
               <td>---</td>
               </tr>`;
               const studentRoot = document.querySelector("#customers");
               if (!studentRoot) throw new Error("student Root not found");
               studentRoot.innerHTML += html;
            } catch (error) {
                console.error(error);
            }
        }




function handleStudentNameUpdate(ev: any, _id: string) {
  try {
    const name = ev.target.textContent;
    fetch(
      "/api/students/update-student-name?" +
        new URLSearchParams({ name, _id }).toString(),
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}
function handleTeacherNameUpdate(ev: any, _id: string) {
  try {
    const name = ev.target.textContent;
    fetch(
      "/api/teachers/update-teacher-name?" +
        new URLSearchParams({ name, _id }).toString(),
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}



async function getStudents(query) {
  const url =
    "/api/students/get-students?" + new URLSearchParams(query).toString();
  console.log(url);
  const response = await fetch(url);
  return await response.json();
}
async function getTeachers(query) {
  const response = await fetch(
    "/api/teachers/get-teachers?" + new URLSearchParams(query).toString()
  );
  return await response.json();
}

async function getCourses(ids: string[]) {
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
