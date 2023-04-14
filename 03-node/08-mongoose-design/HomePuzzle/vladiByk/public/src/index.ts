import { stringify } from "querystring";

const root = document.querySelector("#root") as HTMLDivElement;
const teacherLoginForm = document.querySelector(
  "#teacherLoginForm"
) as HTMLFormElement;
const teacherIdInput = document.querySelector("#teacherId") as HTMLInputElement;
const teacherLoginDiv = document.querySelector(
  ".teacherLoginContainer"
) as HTMLDivElement;

teacherLoginForm.addEventListener("submit", displayTeacherCourses);

async function displayTeacherCourses(e: Event) {
  e.preventDefault();
  const teacherId = teacherIdInput.value;
  const courseList = await fetch(`/api/v1/teachers/${teacherId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(({ courses }) => courses)
    .catch((error) => console.error(error));

  teacherIdInput.value = "";
  renderCoursesPage(courseList, teacherId);
}

function renderCoursesPage(coursesList: Course[], teacherId: string) {
  root.innerHTML = "";
  root.innerHTML = `
  <h1>Available courses</h1>
  <div class="coursesRoot">
  
  ${coursesList
    .map(
      (course) =>
        `<div class="course" id="${course._id}">${course.name}
        <span class="deleteCourse">Delete</span></div>`
    )
    .join("")} 
    </div>
  <form id="newCourseForm">
    <label for="addCourseName">
      <input
        type="text"
        name="addCourseName"
        id="addCourseName"
        placeholder="Astrophysics..."
      />
    </label>
    <button type="submit">Add</button>
  </form>`;
  const deleteButtons = document.querySelectorAll(
    ".deleteCourse"
  ) as NodeListOf<HTMLSpanElement>;

  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", async () => {
      console.log(`delete btn with id ${btn.parentElement?.id}...`);
      await fetch(`/api/v1/courses/${btn.parentElement?.id}`, {
        method: "Delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teacherId }),
      })
        .then((res) => res.json())
        .then(({ courses }) => renderCoursesPage(courses, teacherId))
        .catch((error) => console.error(error));
    })
  );

  const courses = document.querySelectorAll(
    ".course"
  ) as NodeListOf<HTMLDivElement>;

  courses.forEach((course) =>
    course.addEventListener("click", () => {
      console.log(`Course clicked...`);
      renderStudentPage(course.id);
    })
  );

  saveNewCourse(coursesList, teacherId);
}

function saveNewCourse(coursesList: Course[], teacherId: string) {
  const newCourseForm = document.querySelector(
    "#newCourseForm"
  ) as HTMLFormElement;

  newCourseForm.addEventListener("submit", async (e: Event) => {
    e.preventDefault();
    const courseName = newCourseForm.querySelector(
      "#addCourseName"
    ) as HTMLInputElement;
    const newCourse = await fetch(`/api/v1/courses`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: courseName.value, teacherId }),
    })
      .then((res) => res.json())
      .then(({ course }) => course)
      .catch((error) => console.error(error));
    coursesList.push(newCourse);
    courseName.value = "";
    renderCoursesPage(coursesList, teacherId);
  });
}

async function renderStudentPage(courseId: string) {
  const studentList = await fetch(`${studentApi}/${courseId}`)
    .then((res) => res.json())
    .then(({ students }) =>
      students
        .map(
          (student: StudentTemplate) => new Student(student.name, student._id)
        )
        .join("")
    )
    .catch((error) => console.error(error));
  let html = `<div class="studentDiv">
  <b>Vladislav Bykanov (test)</b>
  <span>Average: 66 (test)</span>
  <div class="crudIcons">
    <i class="fa-regular fa-trash-can"></i>
    <i class="fa-regular fa-pen-to-square"></i>
   </div>
  </div>`;
  if (studentList) {
    html = studentList
      .map(
        (student: Student) =>
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
  }

  root.innerHTML = `
  <h1>Student list</h1>
  <div class="studentsContainer">
  ${html}
  </div>
  <h4>Add student</h4>
  <form id="addStudentForm">
    <label for="name"
      >Full name:
      <input type="text" name="fullName" id="name" placeholder="John Doe"
    /></label>
    <label for="grade"
      >Grade: <input type="number" name="grade" id="grade" placeholder="88"
    /></label>
    <button type="submit">Add</button>
  </form>`;
  saveNewStudent(courseId);
}

function saveNewStudent(courseId: string) {
  const addStudentForm = document.querySelector(
    "#addStudentForm"
  ) as HTMLFormElement;

  addStudentForm.addEventListener("submit", async (e: Event) => {
    e.preventDefault();
    const name = addStudentForm.fullName.value;
    const grade = addStudentForm.grade.value;
    const newStudent = await fetch(`${studentApi}`, {
      method: "POST",
      body: JSON.stringify({ name, courseId }),
    }).catch((error) => console.error(error));
  });
}
