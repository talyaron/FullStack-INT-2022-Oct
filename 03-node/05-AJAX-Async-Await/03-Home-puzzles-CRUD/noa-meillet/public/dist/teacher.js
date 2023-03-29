function handleGetStudentsGrades() {
    try {
        fetch("/api/get-studentsGrades")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var grades = _a.grades;
            try {
                if (!grades)
                    throw new Error("didnt find grades");
                renderStudentsGrades(grades);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderStudentsGrades(grades) {
    try {
        if (!grades)
            throw new Error("No grades");
        var html = grades
            .map(function (grade) {
            renderStudentGrades(grade);
        })
            .join(" ");
        var gradesElement = document.querySelector("#grades");
        if (!gradesElement)
            throw new Error("coundnt find grades element on DOM");
        gradesElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderStudentGrades(grade) {
    try {
        return "<div class=\"studentCard\">\n              <p contenteditable oninput=\"handleUserNameUpdate(event, '" + grade.uid + "')\">" + grade.student.name + "</p>\n              <p contenteditable oniput=\"handleUserNameUpdate(event, '" + grade.uid + "')\">" + grade.task + "</p>\n              <p contenteditable oniput=\"handleUserNameUpdate(event, '" + grade.uid + "')\">" + grade.grade + "</p>\n              <button onclick='handleDeleteUser(\"" + grade.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
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
