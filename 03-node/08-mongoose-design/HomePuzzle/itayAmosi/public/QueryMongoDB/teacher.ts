import { Teacher } from "../../API/teachers/teachersModel";

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

function handleDeleteTeacher(_id: string) {
  try {
    fetch(
      "/api/teachers/delete-teacher?" + new URLSearchParams({ _id }).toString(),
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        const teacherId = document.getElementById(_id);

        if (!teacherId) {
          throw new Error("teacher delete from HTML");
        }
        teacherId.remove();
      })

      .catch((error) => {
        console.error(error);
      });
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