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
  async update() {
    const id = this.uuid;
    const updatedStudentList = studentList.map((item) =>
      item == this ? this : item
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
  }
  async delete() {
    const studentIndex = studentList.findIndex((student) => student === this);

    studentList.splice(studentIndex, 1);
    renderStudents(studentList);

    await fetch(`/api/v1/students/${this.uuid}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentList),
    }).catch((error) => console.error(error));
  }
}

interface StudentTemplate {
  name: string;
  grades: number[];
  uuid: number;
}

let studentList: Student[];

const fetchStudents = () => {
  const list = fetch("/api/v1/students")
    .then((res) => res.json())
    .then(
      ({ students }) =>
        (studentList = students.map(
          (student: StudentTemplate) =>
            (student = new Student(student.name, student.grades, student.uuid))
        ))
    );
  return list;
};

const displayStudents = async () => {
  try {
    await fetchStudents();
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

      const findStudent = studentList.find(
        (student) => Number(student.uuid) == id
      );
      if (findStudent) findStudent.delete();
    })
  );
};

const addNewStudent = async () => {
  const studentName = document.querySelector("#fullName") as HTMLInputElement;
  const studentGrade = document.querySelector("#grade") as HTMLInputElement;

  if (!studentName.value || !studentGrade.value) {
    return alert("Missing input field...");
  }
  const newStudent = new Student(studentName.value);
  newStudent.addGrade(Number(studentGrade.value));

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

const newStudentGradeInput = document.querySelector(
  "#grade"
) as HTMLInputElement;

newStudentGradeInput.addEventListener("keyup", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    addNewStudent();
  }
});
addStudentBtn.addEventListener("click", addNewStudent);

const editWindow = document.querySelector(".editWindow") as HTMLDivElement;

const openEditWindow = async (id: number) => {
  editWindow.style.display = "flex";

  const findStudent = studentList.find((student) => Number(student.uuid) == id);
  if (!findStudent) return alert("User not found");
  // console.log(findStudent);
  renderGradeList(findStudent);
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
  <ul class="gradesList">
      <div><b>Grades</b><b>Edit</b></div>
    ${listItemsHtml}
  </ul>
  <label for="newGrade">
    <input type="number" id="newGradeInput" placeholder="New grade..." />
    <input type="submit" id="addGradeBtn"/>
  </label>
  <button id="closeEditWindow">Done</button>
  `;
  const editGradeBtns = editWindow.querySelectorAll(
    ".fa-pen"
  ) as NodeListOf<HTMLIFrameElement>;
  const editBtnsArr = Array.from(editGradeBtns);
  editGradeBtnEvent(editBtnsArr, student);
  const deleteGradeBtns = editWindow.querySelectorAll(
    ".fa-square-minus"
  ) as NodeListOf<HTMLElement>;
  const deleteBtnsArr = Array.from(deleteGradeBtns);
  deleteGrade(deleteBtnsArr, student);
  const addGradeBtn = editWindow.querySelector(
    "#addGradeBtn"
  ) as HTMLInputElement;
  const newGradeInput = editWindow.querySelector(
    "#newGradeInput"
  ) as HTMLInputElement;
  addGrade(addGradeBtn, newGradeInput, student);
  newGradeInput.focus();
}

function editGradeBtnEvent(btnArr: Element[], student: Student) {
  btnArr.forEach((btn) =>
    btn.addEventListener("click", () => {
      const gradeIndex = btnArr.indexOf(btn);
      const listEle = btn.parentElement?.parentElement as HTMLDataListElement;
      const iconDiv = listEle.querySelector(".listIcons") as HTMLDivElement;
      const spanEle = listEle.firstElementChild as HTMLSpanElement;
      const inputEle = document.createElement("input") as HTMLInputElement;
      inputEle.setAttribute("type", "number");
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
            return alert("Check grade input");

          spanEle.textContent = inputEle.value;
          listEle.replaceChild(spanEle, inputEle);
          student.grades[gradeIndex] = Number(inputEle.value);
          // updateStudent(student);
          student.update();
          iconDiv.style.display = "flex";
        }
      });
    })
  );
}

function deleteGrade(btnsArr: Element[], studentToUpdate: Student) {
  btnsArr.forEach((btn) =>
    btn.addEventListener("click", () => {
      const gradeIndex = btnsArr.indexOf(btn);
      const listEle = btn.parentElement?.parentElement as HTMLDataListElement;
      listEle.remove();
      studentToUpdate.grades.splice(gradeIndex, 1);
      studentToUpdate.update();
    })
  );
}

function addGrade(
  btn: HTMLInputElement,
  newGradeInput: HTMLInputElement,
  student: Student
) {
  btn.addEventListener("click", () => {
    if (
      Number(newGradeInput.value) > 100 ||
      Number(newGradeInput.value) < 0 ||
      !Number(newGradeInput.value)
    )
      return alert("Check grade input");
    student.addGrade(Number(newGradeInput.value));
    student.update();
    renderGradeList(student);
    newGradeInput.value = "";
  });
  newGradeInput.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (
        Number(newGradeInput.value) > 100 ||
        Number(newGradeInput.value) < 0 ||
        !Number(newGradeInput.value)
      )
        return alert("Check grade input");
      student.addGrade(Number(newGradeInput.value));
      student.update();
      renderGradeList(student);
      newGradeInput.value = "";
    }
  });
}

window.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.id === "closeEditWindow") {
    editWindow.style.display = "none";
  }
  if (target.classList.contains("fa-pen-to-square")) {
    const id = Number(target.parentElement?.parentElement?.id);
    openEditWindow(id);
  }
});
