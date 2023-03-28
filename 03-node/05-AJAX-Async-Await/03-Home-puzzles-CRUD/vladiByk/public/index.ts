class Student {
  public uuid: string;
  constructor(public name: string, public grades: number[] = []) {
    this.uuid = (Math.random() * 100000000000000).toString();
  }
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
}

const fetchStudents = () => {
  const list = fetch("/api/v1/students").then((res) => res.json());
  return list;
};

const displayStudents = async () => {
  const studentList = await fetchStudents()
    .then((data) => {
      const studentsJson: Student[] = data.students;
      return studentsJson.map(
        (student) => (student = new Student(student.name, student.grades))
      );
    })
    .catch((err) => console.error(err));
  // console.log(studentList);
  if (studentList) renderStudents(studentList);
};

displayStudents();

const renderStudents = async (students: Student[]) => {
  const html = students
    .map(
      (student) =>
        `<div class="studentDiv">
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
  const deleteBtn = document.querySelectorAll(
    ".fa-trash-can"
  ) as NodeListOf<HTMLElement>;
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
        (student: Student) => new Student(student.name, student.grades)
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
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  renderStudents(studentList);
};

addStudentBtn.addEventListener("click", addNewStudent);
