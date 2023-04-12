import { error } from "console";
import StudentModel from "../API/students/studentModel";


interface Student {
    name: string;
    courses: string[];
  }
  
  const addStudentForm = document.getElementById('addStudentForm') as HTMLFormElement | null;
  if (addStudentForm) {
    addStudentForm.addEventListener('submit', handleAddStudent);
  }
  
  function handleAddStudent(event: Event) {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const name = form.elements.namedItem('name')?.value;
  
    if (!name) {
      console.error('No name provided');
      return;
    }
  
    const newStudent = { name };
  
    fetch('/api/students/add-student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add student');
      }
  
      console.log('Success:', response);
      alert('Student added successfully!');
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add student.');
    });
  }

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
       <br><br>`;
        });
        studentsList.innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  function handleDeleteStudent(_id: string) {
    console.log(_id)
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
    console.log(_id)
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
  // const addCourse = document.querySelector("#add-course-form") as HTMLFormElement;
  // addCourse.addEventListener('submit', async (event) => {
  //   event.preventDefault();
  //   const course = document.getElementById('course').value;
  //   const studentId = document.getElementById('student').value;
  //   const response = await fetch('/api/students/add-course', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ course, studentId })
  //   });
  //   if (response.ok) {
  //     const data = await response.json();
  //     const courses = data.courses;
  //   } else {
  //     const error = await response.json();
  //     console.error(error);
  //   }
  // });