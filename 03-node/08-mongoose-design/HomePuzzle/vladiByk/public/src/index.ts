const teacherLoginForm = document.querySelector(
  "#teacherLoginForm"
) as HTMLFormElement;
const teacherIdInput = document.querySelector("#teacherId") as HTMLInputElement;

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
    .then((data) => data)
    .catch((error) => console.error(error));
  console.log(courseList);

  teacherIdInput.value = "";
}
