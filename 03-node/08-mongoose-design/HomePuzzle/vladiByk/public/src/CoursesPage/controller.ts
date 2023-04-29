async function renderCoursePage(teacherId: string) {
  const teacher: TeacherTemplate = await getTeacher(teacherId);

  const courses: CourseTemplate[] = await getTeacherCourses(teacherId);

  root.innerHTML = `
      <h1>${teacher.name} courses</h1>
      <div id="coursesRoot">
      </div>
      <form id="addCourseForm">
        <label for="courseName">
          <input
            type="text"
            name="courseName"
            id="courseName"
            placeholder="Astrophysics..."
          />
        </label>
        <button type="submit">Add</button>
      </form>
      `;
  renderCoursesRoot(courses);

  const addCourseForm = root.querySelector("#addCourseForm") as HTMLFormElement;

  addCourseForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const courseName = addCourseForm.courseName.value;
    addCourse(courseName, teacherId);
  });

  const coursesBtn = root.querySelectorAll(
    ".course"
  ) as NodeListOf<HTMLButtonElement>;

  coursesBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      sessionStorage.setItem("courseId", btn.id);
      location.href = '/course'
      // displayStudents(btn.id);
    })
  );
}

async function addCourse(courseName: string, teacherId: string) {
  await fetch(`${courseApi}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ courseName, teacherId }),
  }).catch((error) => console.error(error));
  renderCoursePage(teacherId);
}

function renderCoursesRoot(coursesList: CourseTemplate[]) {
  const coursesRoot = document.querySelector("#coursesRoot") as HTMLDivElement;
  coursesRoot.innerHTML = coursesList
    .map(
      (course) =>
        `<button class="course" id="${course._id}">${course.name}</button>`
    )
    .join("");
}
