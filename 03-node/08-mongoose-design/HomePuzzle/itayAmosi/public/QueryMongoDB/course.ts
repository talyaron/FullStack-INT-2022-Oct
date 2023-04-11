import { Course } from "../../API/courses/coursesModel";

function renderCourseTable(course: Course) {
  try {
    if (!course) throw new Error("No course found");
    const html = `<table id="customers">
             <tr>
               <td>${course._id}</td>
               <td>---</td>
               <td>---</td>
               <td>${course.name}</td>
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


function handelCourse() {
  try {
    fetch("/api/courses/get-course")
      .then((res) => res.json())
      .then(({ courses }) => {
        try {
          if (!courses) throw new Error("didnt find courses");
          courses.forEach((course) => {
            renderCourseTable(course);

          });

        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}


