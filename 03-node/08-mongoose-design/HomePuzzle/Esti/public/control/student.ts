interface Student {
  name: string;
  password: string;
  uid?: string;
  _id?: string;
}

function handleGetStudents() {
  try {
    console.log("test");

    fetch("/api/students/get-students")
      .then((res) => res.json())
      .then(({ students }) => {
        try {
          if (!students) throw new Error("didnt find students");
          console.log(students);
          renderStudents(students);
        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

function renderStudents(students: Array<Student>) {
  try {
    if (!students) throw new Error("No students");

    const html = students
      .map((student) => {
        return renderStudent(student);
      })
      .join(" ");
    const studentsElement = document.querySelector("#students");
    if (!studentsElement) throw new Error("coundnt find students element on DOM");

    studentsElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderStudent(student: Student) {
  try {
    console.log(student);

    return `<div class="studentCard">
            <img password="${student.password}" alt="student name is ${student.name}">
            <p contenteditable oninput="handleStudentNameUpdate(event, '${student.uid}')">${student.name}</p>
            <button onclick='handleDeleteStudent("${student._id}")'>DELETE</button>
            </div>`;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function handleStudentNameUpdate(ev: any, uid: string) {
  try {
    console.log(uid);
    const name = ev.target.textContent;
    fetch("/api/students/update-student-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uid }),
    });
  } catch (error) {
    console.error(error);
  }
}

function handleAddStudent(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No password");
    const newStudent: any = { name, password };

    //send to server:
    fetch("/api/students/add-student", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function handleDeleteStudent(_id: string) {
  try {
    console.log(_id);

    fetch("/api/students/delete-student", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then(({ students }) => {
        renderStudents(students);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}



