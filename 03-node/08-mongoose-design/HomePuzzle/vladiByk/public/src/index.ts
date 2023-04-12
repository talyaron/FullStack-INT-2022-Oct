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
      (course) => `<div class="course" id="${course._id}">${course.name}</div>`
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

  const courses = document.querySelectorAll(
    ".course"
  ) as NodeListOf<HTMLDivElement>;

  courses.forEach((course) =>
    course.addEventListener("click", () => {
      console.log("Course clicked...");
    })
  );

  const newCourseForm = document.querySelector(
    "#newCourseForm"
  ) as HTMLFormElement;

  newCourseForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const courseName = newCourseForm.querySelector(
      "#addCourseName"
    ) as HTMLInputElement;
    console.log("New course created...");
    console.log(courseName.value);
    courseName.value = "";
  });
}

async function saveNewCourse(courseName: string, teacherId: string) {
  await fetch(`/api/v1/courses`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teacherId),
  });
}
