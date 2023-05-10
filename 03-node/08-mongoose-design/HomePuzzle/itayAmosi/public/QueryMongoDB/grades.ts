import { Grade } from "../../API/grades/gradesModel";

function renderGradeTable(grade: Grade) {
  try {
    if (!grade) throw new Error("No grade found");
    const html = `<table id="customers">
             <tr>
               <td>${grade._id}</td>
               <td>---</td>
               <td>---</td>
               <td>${grade.gradCourse}</td>
               <td>${grade.grade}</td>
               </tr>`;
               const studentRoot = document.querySelector("#customers");
               if (!studentRoot) throw new Error("student Root not found");
               studentRoot.innerHTML += html;
            } catch (error) {
                console.error(error);
            }
        }
        
        // <td>${student.courses[`${GradeSchema}`]}</td>


function handelGrade() {
  try {
    fetch("/api/grades/get-grades")
      .then((res) => res.json())
      .then(({ grades }) => {
        try {
          if (!grades) throw new Error("didnt find grades");
          grades.forEach((grade) => {
            renderGradeTable(grade);

          });

        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}


