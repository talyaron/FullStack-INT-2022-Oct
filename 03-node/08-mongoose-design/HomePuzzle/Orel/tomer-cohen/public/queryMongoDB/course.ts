import { Teacher } from "../../API/teachers/teachersModel";

function renderTeacherTable(teacher: Teacher) {
  try {
    if (!teacher) throw new Error("No student found");
    const html = `<table id="customers">
             <tr>
               <td>${teacher._id} <button onclick='handleDeleteTeacher("${teacher._id}")'>delete</button></td>
               <td contenteditable oninput="handleTeacherNameUpdate(event, '${teacher._id}')">${teacher.name}</td>
               <td>${teacher.lestName}</td>
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


function handelTeacher() {
  try {
    fetch("/api/teachers/get-teachers")
      .then((res) => res.json())
      .then(({ teachers }) => {
        try {
          if (!teachers) throw new Error("didnt find teachers");
          teachers.forEach((teacher) => {
            getTeacherCourses(teacher.courses)
            .then(({courses}) =>{
              renderTeacherTable({...teacher,courses: courses})});
            })
        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

async function getTeacherCourses(ids: string[]) {
  const response = await fetch(
    "/api/courses/get-courses-by-ids?" +
      new URLSearchParams({ ids: ids.join(",") }).toString()
  );
  return await response.json();
}
