interface student {
    name: string;
    email: string;
    uid?: string;
  }
  
  function handleGetstudents() {
    console.log("test");
    try {
      fetch("/api/get-students")
        .then((res) => res.json())
        .then(({ students }) => {
          try {
            if (!students) throw new Error("didnt find students");
            console.log(students);
            renderstudents(students);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderstudents(students: Array<student>) {
    try {
      if (!students) throw new Error("No students");
  
      const html = students
        .map((student) => {
          return renderstudent(student);
        })
        .join(" ");
      const studentsElement = document.querySelector("#students");
      if (!studentsElement) throw new Error("coundnt find students element on DOM");
  
      studentsElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderstudent(student: student) {
    try {
      return `<div class="studentCard">
              <p> ${student.name}</p>
              <p contenteditable oninput="handlestudentNameUpdate(event, '${student.uid}')">${student.name}</p>
              <button onclick='handleDeletestudent("${student.uid}")'>DELETE</button>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  function handlestudentNameUpdate(ev: any, uid: string) {
    try {
      console.log(uid);
      const name = ev.target.textContent;
      fetch("/api/update-student-name", {
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
  
  function handleAddstudent(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const email = ev.target.elements.email.value;
      if (!name) throw new Error("No name");
      if (!email) throw new Error("No email");
      const newstudent: any = { name, email };
  
      //send to server:
      fetch("/api/add-student", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newstudent),
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
  
  function handleDeletestudent(uid: string) {
    try {
      console.log(uid);
  
      fetch("/api/delete-student", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      })
        .then((res) => res.json())
        .then(({ students }) => {
        
        
          renderstudents(students);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  