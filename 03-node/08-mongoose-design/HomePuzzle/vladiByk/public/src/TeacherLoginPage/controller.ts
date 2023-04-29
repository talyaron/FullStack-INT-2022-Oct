function renderTeacherLogin() {
  root.innerHTML = `
    <h1>Teacher login page</h1>
    <form id="teacherLoginForm">
      <label for="teacherId"
        >Teacher ID:
        <input
          type="text"
          name="teacherId"
          id="teacherId"
          placeholder="Fdgg23fWe34..."
      /></label>
      <button type="submit">Enter</button>
    </form>`;

  const teacherLoginForm = document.querySelector(
    "#teacherLoginForm"
  ) as HTMLFormElement;

  const teacherIdInput = document.querySelector(
    "#teacherId"
  ) as HTMLInputElement;

  teacherLoginForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    checkTeacherId(teacherIdInput.value);
    teacherIdInput.value = "";
  });
}

async function checkTeacherId(teacherId: string) {
  try {
    const teacher: TeacherTemplate = await fetch(`${teacherApi}/${teacherId}`)
      .then((res) => res.json())
      .then(({ teacher }) => teacher)
      .catch((error) => console.error(error));
    if (!teacher) throw new Error("Teacher not found!");
    // renderCoursePage(teacher._id);
    sessionStorage.setItem("teacherId", teacherId);
    location.href = "/teacher";
  } catch (error) {
    console.error(error);
  }
}
