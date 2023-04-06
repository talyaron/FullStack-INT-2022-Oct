displayStudents();

const editWindow = document.querySelector(".editWindow") as HTMLDivElement;

const openEditWindow = async (id: string) => {
  const studentList = await fetch(studentApi)
    .then((res) => res.json())
    .then(({ students }) =>
      students.map(
        (student: StudentTemplate) =>
          new Student(student.name, student.id)
      )
    );
  editWindow.style.display = "flex";

  const findStudent: Student = studentList.find(
    (student: Student) => student.id == id
  );
  if (!findStudent) return alert("User not found");
  renderGradeList(findStudent.id);
};

async function renderGradeList(studentID: string) {
  const student = await fetch(`${studentApi}/${studentID}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      ({ student }) => new Student(student.name, student.id)
    )
    .catch((error) => console.error(error));
  if (!student) return;
  // const listItemsHtml = student.grades
  //   .map(
  //     (grade) =>
  //       `<li>
  //   <span>${grade}</span>
  //   <div class="listIcons">
  //     <i class="fa-regular fa-square-minus"></i>
  //     <i class="fa-solid fa-pen"></i>
  //   </div>
  // </li>`
  //   )
  //   .join("");
  // editWindow.innerHTML = `
  // <h2>${student.name}</h2>
  // <ul class="gradesList">
  //     <div><b>Grades</b><b>Edit</b></div>
  //   ${listItemsHtml}
  // </ul>
  // <label for="newGrade">
  //   <input type="number" id="newGradeInput" placeholder="New grade..." />
  //   <input type="submit" id="addGradeBtn"/>
  // </label>
  // <button id="closeEditWindow">Done</button>
  // `;
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
          iconDiv.style.display = "flex";
        }
      });
    })
  );
}

function deleteGrade(btnsArr: Element[], studentToUpdate: Student) {
  btnsArr.forEach((btn) =>
    btn.addEventListener("click", async () => {
      // const gradeIndex = btnsArr.indexOf(btn);
      // const listEle = btn.parentElement?.parentElement as HTMLDataListElement;
      // listEle.remove();
      // const grade = studentToUpdate.grades.splice(gradeIndex, 1);
      // await fetch(`${studentApi}/${studentToUpdate._id}`, {
      //   method: "PATCH",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ grade, gradeIndex, delete: true }),
      // }).catch((error) => console.error(error));

      displayStudents();
    })
  );
}

function addGrade(
  btn: HTMLInputElement,
  newGradeInput: HTMLInputElement,
  student: Student
) {
  btn.addEventListener("click", () => {
    updateGrade(newGradeInput, student.id);
  });

  newGradeInput.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      updateGrade(newGradeInput, student.id);
    }
  });
}

async function updateGrade(input: HTMLInputElement, studentID: string) {
  if (
    Number(input.value) > 100 ||
    Number(input.value) < 0 ||
    !Number(input.value)
  )
    return alert("Check grade input");

  await fetch(`${studentApi}/${studentID}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ grade: input.value, delete: false }),
  }).catch((error) => console.error(error));

  renderGradeList(studentID);
  displayStudents();

  input.value = "";
}

window.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.id === "closeEditWindow") {
    editWindow.style.display = "none";
  }
  if (target.classList.contains("fa-pen-to-square")) {
    const id = target.parentElement?.parentElement?.id as string;
    openEditWindow(id);
  }
});
