class Student {
  public uuid: string;
  constructor(public name: string, public grades: number[]) {
    this.uuid = (Math.random() * 100000000000000).toString();
  }
  addGrade(grade: number) {
    this.grades.push(grade);
  }
}

const root = document.querySelector("#root") as HTMLDivElement;

const displayStudents = async () => {
  const students: Student[] = await fetch("/api/v1/students")
    .then((res) => res.json())
    .then(({ students }) =>
      students.map(
        (student) => (student = new Student(student.name, student.grades))
      )
    )
    .catch((err) => console.error(err));
  console.log(students);
  students[0].addGrade(999);
  //   console.log(students);
  // const html = students.map(student => ``)
};

displayStudents();

const renderStudents = async (students: Student[]) => {
  
};
