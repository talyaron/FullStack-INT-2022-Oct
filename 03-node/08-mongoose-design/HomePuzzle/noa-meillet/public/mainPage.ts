interface Student {
    name: string;
    familyName:string;
    phone:string;
    uid?: string;
  }
  
  function handleGetStudents() {
    try {
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
              <h3>First name: ${student.name}</h3>
              <h3>Family name: ${student.familyName}</h3>
              <h3>Phone number: ${student.phone}</h3>
              <button onclick='handleDeletestudent("${student.uid}")'>DELETE</button>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  /*
  function handleUserNameUpdate(ev: any, uid: string) {
    try {
      console.log(uid);
      const name = ev.target.textContent;
      fetch("/api/users/update-user-name", {
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
  */

  function handleAddStudent(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const familyName = ev.target.elements.familyName.value;
      const phoneNumber = ev.target.elements.phoneNumber.value;
      if (!name) throw new Error("No name");
      if (!familyName) throw new Error("No family name");
      if (!phoneNumber) throw new Error("No phone number");
      const newStudent: any = { name, familyName, phoneNumber };
  
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
  