import CourseModel from "../API/courses/coursesModel"; 
import{ Course } from "../API/courses/coursesModel";
import StudentModel from "../API/students/studentModel";
import{ Student } from "../API/students/studentModel";


const addStudentForm = document.getElementById(
  "addStudentForm"
) as HTMLFormElement | null;
if (addStudentForm) {
  addStudentForm.addEventListener("submit", handleAddStudent);
}

function handleAddStudent(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const name = form.elements.namedItem("name")?.value;

  if (!name) {
    console.error("No name provided");
    return;
  }

  const newStudent = { name };

  fetch("/api/students/add-student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      console.log("Success:", response);
      alert("Student added successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to add student.");
    });
}

// function getStudents() {
//   fetch("/api/students/get-students")
//     .then((res) => res.json())
//     .then((data) => {
//       const studentsList = document.querySelector("#studentsList");
//       if (!studentsList) throw new Error("error studentsList");
//       studentsList.innerHTML = "";
//       // let html = "";
//       // data.students.forEach((student) => {
//       //   html += `<option value="${student._id}">${student.name}</option>`;
//       // });
//       const studentSelect = document.querySelector("#student");
//       studentSelect.innerHTML = html;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }



function getStudents() {
  fetch("/api/students/get-students")
    .then((res) => res.json())
    .then((data) => {
      const studentsList = document.querySelector("#studentsList");
      if(!studentsList) throw new Error("error studentsList")
      studentsList.innerHTML = "";
      let html = "";
      data.students.forEach((student) => {
        html += `<tr>
        <td>${student.name}</td>
        <td><input type="text" id="update-name-${student._id}" value="${student.name}" /></td>
        <td><button onClick="handleUpdateStudent('${student._id}')">Update</button></td>
        <td><button onClick="handleDeleteStudent('${student._id}')">Delete</button></td>
     </tr>
     <br>`;
      });
      studentsList.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleDeleteStudent(_id: string) {
  console.log(_id);
  try {
    fetch(`/api/students/delete-student`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then(() => {
        getStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateStudent(_id: string) {
  console.log(_id);
  const updatedName = document.getElementById(`update-name-${_id}`)?.value;
  if (!updatedName) {
    alert("Please enter a name");
    return;
  }
  try {
    fetch(`/api/students/update-student-name`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id, updatedName }),
    })
      .then((res) => res.json())
      .then(() => {
        getStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

// function handleAddCourse(event) {
//   event.preventDefault();
//   const courseElement = document.querySelector("#course");
//   const studentElement = document.querySelector("#student");
//   if (!courseElement || !studentElement) {
//     console.error("Error: course or student element not found");
//     return;
//   }
//   const newcourse: any = {course , studentId}
//   fetch("/api/courses/add-course", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       courseName,
//       studentId,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const courseName = courseElement.value;
//       const studentId = studentElement.value;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }


function renderselect(event,student: Student) {
  try {
    console.log(student.name)
      const html = `
  <option>${student.name}</option>
  `;
  const select = document.querySelector("#select");
  if(!select){
    throw new Error("no select")
  }
  select.innerHTML = html;
  } catch (error) {
    console.error(error)
  }
}


// function handelSelect(event){
//   try {
//     console.log(event)
//     fetch("/api/students/get-select")
//     .then((res) => res.json())
//     .then(({students}) => students.forEach((student) => {
//       renderselect(student.name)
//       console.log(student.name)
//     }));
//   } catch (error) {
    
//   }
// }
