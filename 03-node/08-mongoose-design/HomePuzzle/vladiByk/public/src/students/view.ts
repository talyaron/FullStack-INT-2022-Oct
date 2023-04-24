const root = document.querySelector("#root") as HTMLDivElement;
const studentApi = "/api/v1/students";
const gradesApi = "/api/v1/grades";

const addStudentForm = document.querySelector(
  "#addStudentForm"
) as HTMLFormElement;

addStudentForm.addEventListener("submit", handleAddStudentForm);

async function handleAddStudentForm(e: Event) {
  e.preventDefault();
  const newStudentName = addStudentForm.fullName.value;
  const newStudentGrade = addStudentForm.grade.value;
  const student = await fetch(`${studentApi}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newStudentName }),
  })
    .then((res) => res.json())
    .then(({ student }) => new Student(student.name))
    .catch((error) => console.error(error));
  await fetch(`${gradesApi}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ grade: newStudentGrade }),
  }).catch((error) => console.error(error));
  displayStudents();
}
