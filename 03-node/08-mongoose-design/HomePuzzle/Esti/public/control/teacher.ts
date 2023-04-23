interface Teacher {
  name: string;
  password: string;
  uid?: string;
  _id?: string;
}

function handleGetTeachers() {
  
  try {
    // console.log("XXXXXXXXXXXXXXXXXXXXXXX");

    fetch("/api/teachers/get-teachers")
      .then((res) => res.json())
      .then(({ teachers }) => {
        try {
          if (!teachers) throw new Error("didnt find teachers");
          console.log(teachers);
          renderTeachers(teachers);
        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

function renderTeachers(teachers: Array<Teacher>) {
  try {
    if (!teachers) throw new Error("No teachers");

    const html = teachers
      .map((teacher) => {
        return renderTeacher(teacher);
      })
      .join(" ");
    const teachersElement = document.querySelector(".teacher");
    if (!teachersElement) throw new Error("coundnt find teachers element on DOM");

    teachersElement.innerHTML = html;

  } catch (error) {
    console.error(error);
  }
}

function renderTeacher(teacher: Teacher) {
  try {
    console.log(teacher);

    return `<div class="teacherCard">
            <img password="${teacher.password}" alt="teacher name is ${teacher.name}">
            <p contenteditable oninput="handleTeacherNameUpdate(event, '${teacher.uid}')">${teacher.name}</p>
            <button onclick='handleDeleteTeacher("${teacher._id}")'>DELETE</button>
            </div>`;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function handleTeacherNameUpdate(ev: any, uid: string) {
  try {
    console.log(uid);
    const name = ev.target.textContent;
    fetch("/api/teachers/update-teacher-name", {
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

function handleAddTeacher(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No password");
    const newTeacher: any = { name, password };

    //send to server:
    fetch("/api/teachers/add-teacher", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeacher),
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

function handleDeleteTeacher(_id: string) {
  try {
    console.log(_id);

    fetch("/api/teachers/delete-teacher", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then(({ teachers }) => {
        renderTeachers(teachers);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}


