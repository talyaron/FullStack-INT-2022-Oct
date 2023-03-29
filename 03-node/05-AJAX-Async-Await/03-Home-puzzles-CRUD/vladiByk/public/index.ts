class Student {
  constructor(
    public name: string,
    public grades: number[] = [],
    public uuid: number = Math.random() * 100000000000000
  ) {}
  addGrade(grade: number) {
    this.grades.push(grade);
  }
  getAverage() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
}

interface StudentTemplate {
  name: string;
  grades: number[];
  uuid: number;
}

const fetchStudents = () => {
  const list = fetch("/api/v1/students").then((res) => res.json());
  return list;
};

const displayStudents = async () => {
  try {
    const studentList = await fetchStudents()
      .then((data) => {
        const studentsJson: Student[] = data.students;
        return studentsJson.map(
          (student) =>
            (student = new Student(student.name, student.grades, student.uuid))
        );
      })
      .catch((err) => console.error(err));
    if (studentList) renderStudents(studentList);
  } catch (error) {
    console.error(error);
  }
};

displayStudents();

const renderStudents = async (students: Student[]) => {
  const html = students
    .map(
      (student) =>
        `<div class="studentDiv" id="${student.uuid}">
        <b>${student.name}</b>
        <span>Average: ${student.getAverage()}</span>
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
    btn.addEventListener("click", () => {
      const id = Number(btn.parentElement?.parentElement?.id);
      deleteStudent(id);
    })
  );

  // const editButtons = document.querySelectorAll(
  //   ".fa-pen-to-square"
  // ) as NodeListOf<HTMLElement>;
  // editButtons.forEach((btn) =>
  //   btn.addEventListener("click", () => {
  //     const id = Number(btn.parentElement?.parentElement?.id);
  //     console.log("Edit: " + id);
  //     openEditWindow(id);
  //   })
  // );
};

const addNewStudent = async (e: Event) => {
  e.preventDefault();

  const studentName = document.querySelector("#fullName") as HTMLInputElement;
  const studentGrade = document.querySelector("#grade") as HTMLInputElement;

  if (!studentName.value || !studentGrade.value) {
    return alert("Missing input field...");
  }
  const newStudent = new Student(studentName.value);
  newStudent.addGrade(Number(studentGrade.value));

  const studentList: Student[] = await fetchStudents()
    .then(({ students }) =>
      students.map(
        (student: Student) =>
          new Student(student.name, student.grades, student.uuid)
      )
    )
    .catch((err) => console.error(err));

  studentList.push(newStudent);
  studentName.value = "";
  studentGrade.value = "";

  fetch("/api/v1/students", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentList),
  }).catch((error) => {
    console.error(error);
  });
  renderStudents(studentList);
};

addStudentBtn.addEventListener("click", addNewStudent);

const deleteStudent = async (id: number) => {
  const studentList: Student[] = await fetchStudents()
    .then(({ students }) =>
      students.map(
        (student: StudentTemplate) =>
          new Student(student.name, student.grades, student.uuid)
      )
    )
    .catch((err) => console.error(err));

  const studentIndex = studentList.findIndex(
    (student) => Number(student.uuid) == id
  );

  studentList.splice(studentIndex, 1);

  fetch(`/api/v1/students/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentList),
  }).catch((error) => console.error(error));
  renderStudents(studentList);
};

const editWindow = document.querySelector(".editWindow") as HTMLDivElement;

const openEditWindow = async (id: number) => {
  editWindow.style.display = "flex";

  const studentList: Student[] = await fetchStudents()
    .then(({ students }) =>
      students.map(
        (student: StudentTemplate) =>
          new Student(student.name, student.grades, student.uuid)
      )
    )
    .catch((err) => console.error(err));

  const findStudent = studentList.find((student) => Number(student.uuid) == id);
  if (!findStudent) return alert("User not found");
  // console.log(findStudent);
  renderGradeList(findStudent);
  const editBtn = editWindow.querySelectorAll(
    ".fa-pen"
  ) as NodeListOf<HTMLIFrameElement>;
  const btnsArr = Array.from(editBtn);
  editGradeBtnEvent(btnsArr, findStudent);
};

function renderGradeList(student: Student) {
  const listItemsHtml = student.grades
    .map(
      (grade) =>
        `<li>
    <span>${grade}</span>
    <div class="listIcons">
      <i class="fa-regular fa-square-minus"></i>
      <i class="fa-solid fa-pen"></i>
    </div>
  </li>`
    )
    .join("");
  editWindow.innerHTML = `
  <h2>${student.name}</h2>
  <ul>
      <div><b>Grades</b><b>Edit</b></div>
    ${listItemsHtml}
  </ul>
  <label for="newGrade">
    <input type="number" placeholder="New grade..." />
    <input type="submit" id="addGradeBtn"/>
  </label>
  <button id="closeEditWindow">Done</button>
  `;
}

const updateStudent = async (studentList: Student[], student: Student) => {
  const id = student.uuid;
  const updatedStudentList = studentList.map((item) =>
    item == student ? student : item
  );
  await fetch(`/api/v1/students/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedStudentList),
  }).catch((error) => console.error(error));
  renderStudents(updatedStudentList);
};

function editGradeBtnEvent(btnArr: Element[], student: Student) {
  btnArr.forEach((btn) =>
    btn.addEventListener("click", () => {
      const gradeIndex = btnArr.indexOf(btn);
      const listEle = btn.parentElement?.parentElement as HTMLDataListElement;
      const iconDiv = listEle.querySelector(".listIcons") as HTMLDivElement;
      const spanEle = listEle.firstElementChild as HTMLSpanElement;
      const inputEle = document.createElement("input") as HTMLInputElement;
      inputEle.setAttribute("type", "text");
      inputEle.value = spanEle.innerHTML;
      listEle.replaceChild(inputEle, spanEle);
      inputEle.focus();
      iconDiv.style.display = "none";
      inputEle.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          if (
            Number(inputEle.value) > 100 ||
            Number(inputEle.value) < 0 ||
            !Number(inputEle.value)
          )
            return alert("Wrong grade input");

          spanEle.textContent = inputEle.value;
          listEle.replaceChild(spanEle, inputEle);
          student.grades[gradeIndex] = Number(inputEle.value);
          iconDiv.style.display = "flex";
        }
      });
    })
  );
}

window.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.id === "closeEditWindow") {
    editWindow.style.display = "none";
  }
  if (target.classList.contains("fa-pen-to-square")) {
    const id = Number(target.parentElement?.parentElement?.id);
    // console.log("Edit: " + id);
    openEditWindow(id);
  }
});
