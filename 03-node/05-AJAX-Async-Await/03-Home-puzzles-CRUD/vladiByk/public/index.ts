class Student {
  constructor(
    public name: string,
    public grades: number[] = [],
    public uuid: string = (Math.random() * 100000000000000).toString()
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

export const deleteStudent = async (id: number) => {
  const studentList: Student[] = await fetchStudents()
    .then(({ students }) =>
      students.map(
        (student: Student) =>
          new Student(student.name, student.grades, student.uuid)
      )
    )
    .catch((err) => console.error(err));
  const studentIndex = studentList.findIndex(
    (student) => Number(student.uuid) == id
  );
  studentList.splice(studentIndex, 1);
  fetch("/api/v1/students/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentList),
  }).catch((error) => console.error(error));
  renderStudents(studentList);
};
