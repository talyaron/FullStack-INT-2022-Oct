class Student {
  public uuid: string;
  constructor(public name: string, public grades: number[]) {
    this.uuid = (Math.random() * 100000000000000).toString();
  }
  addGrade(grade: number) {
    this.grades.push(grade);
  }
  getAverage() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
}

const displayStudents = async () => {
  const studentList = await fetch("/api/v1/students")
    .then((res) => res.json())
    .then((data) => {
      const studentsJson: Student[] = data.students;
      return studentsJson.map(
        (student) => (student = new Student(student.name, student.grades))
      );
    })
    .catch((err) => console.error(err));
  console.log(studentList);
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
};
