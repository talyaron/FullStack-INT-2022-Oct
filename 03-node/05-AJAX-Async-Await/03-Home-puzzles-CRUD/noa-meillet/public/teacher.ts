function handleGetStudentsGrades() {
    try {
      fetch ("/api/get-students-grades")
        .then((res) => res.json())
        .then(({ grades }) => {
          try {
            if (!grades) throw new Error("didnt find grades");
            renderStudentsGrades(grades);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderStudentsGrades(grades: Array<Grade>) {
    try {
      if (!grades) throw new Error("No grades");
  
      const html = grades
        .map((grade) => {
          renderStudentGrades(grade);
        })
        .join(" ");
      const gradesElement = document.querySelector("#grades");
      if (!gradesElement) throw new Error("coundnt find grades element on DOM");
  
      gradesElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderStudentGrades(grade: Grade) {
    try {
      return `<div class="studentCard">
              <p contenteditable oninput="handleUserNameUpdate(event, '${grade.uid}')">${grade.student.name}</p>
              <p contenteditable oniput="handleUserNameUpdate(event, '${grade.uid}')">${grade.task}</p>
              <p contenteditable oniput="handleUserNameUpdate(event, '${grade.uid}')">${grade.grade}</p>
              <button onclick='handleDeleteUser("${grade.uid}")'>DELETE</button>
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
      fetch("/api/update-user-name", {
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
  
  function handleAddUser(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const src = ev.target.elements.src.value;
      if (!name) throw new Error("No name");
      if (!src) throw new Error("No src");
      const newUser: any = { name, src };
  
      //send to server:
      fetch("/api/add-user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
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
  
  function handleDeleteUser(uid: string) {
    try {
      console.log(uid);
  
      fetch("/api/delete-user", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      })
        .then((res) => res.json())
        .then(({ users }) => {
        
        
          renderUsers(users);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  */ 