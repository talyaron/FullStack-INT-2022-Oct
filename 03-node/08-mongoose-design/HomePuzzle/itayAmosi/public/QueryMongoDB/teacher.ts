import { Teacher } from "../../API/teachers/teachersModel";

function renderTeacherTable(teacher: Teacher) {
  try {
    if (!teacher) throw new Error("No student found");
    const html = `<table id="customers">
             <tr>
               <td>${teacher._id}</td>
               <td>${teacher.name}</td>
               <td>${teacher.lastName}</td>
               <td>${teacher.course}</td>
               <td>---</td>
               </tr>`;
               const studentRoot = document.querySelector("#customers");
               if (!studentRoot) throw new Error("student Root not found");
               studentRoot.innerHTML += html;
            } catch (error) {
                console.error(error);
            }
        }
        
        // <td>${student.courses[`${GradeSchema}`]}</td>


function handelTeacher() {
  try {
    fetch("/api/teachers/get-teachers")
      .then((res) => res.json())
      .then(({ teachers }) => {
        try {
          if (!teachers) throw new Error("didnt find teachers");
          teachers.forEach((teacher) => {
            renderTeacherTable(teacher);

          });

        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}
