const displayStudents = async () => {
  try {
    const studentList = await fetch(studentApi)
      .then((res) => res.json())
      .then(({ students }) =>
        students.map(
          (student: StudentTemplate) => new Student(student.name, student.id)
        )
      );
    if (studentList) renderStudents(studentList);
  } catch (error) {
    console.error(error);
  }
};

const renderStudents = (students: Student[]) => {
  const html = students
    .map(
      (student) =>
        `<div class="studentDiv" id="${student.id}">
          <b>${student.name}</b>
          <span>Average: ${student}</span>
          <div class="crudIcons">
            <i class="fa-regular fa-trash-can"></i>
            <i class="fa-regular fa-pen-to-square"></i>
           </div>
          </div>`
    )
    .join("");
  root.innerHTML = html;

  const deleteButtons = document.querySelectorAll(
    ".fa-trash-can"
  ) as NodeListOf<HTMLElement>;
  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", async () => {
      const id = btn.parentElement?.parentElement?.id;
      await fetch(`${studentApi}/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).catch((error) => console.error(error));
      displayStudents();
    })
  );
};

