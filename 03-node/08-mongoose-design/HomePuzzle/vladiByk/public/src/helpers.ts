async function createStudent(studentName: string, courseId: string) {
  const createdStudent: StudentTemplate = await fetch(`${studentApi}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: studentName, courseId }),
  })
    .then((res) => res.json())
    .then(({ student }) => student)
    .catch((error) => console.error(error));
  return createdStudent;
}

async function createGrade(score: number, courseId: string, studentId: string) {
  await fetch(`${gradesApi}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      score,
      courseId,
      studentId: studentId,
    }),
  }).catch((error) => console.error(error));
}

async function getTeacher(teacherId: string) {
  return await fetch(`${teacherApi}/${teacherId}`)
    .then((res) => res.json())
    .then(({ teacher }) => teacher)
    .catch((error) => console.error(error));
}

async function getTeacherCourses(teacherId: string) {
  return fetch(`${courseApi}/teacher/${teacherId}`)
    .then((res) => res.json())
    .then(({ courses }) => courses)
    .catch((error) => console.error(error));
}

async function getCourse(courseId: string) {
  return await fetch(`${courseApi}/${courseId}`)
    .then((res) => res.json())
    .then(({ course }) => course)
    .catch((error) => console.error(error));
}

async function getStudent(studentId: string) {
  return await fetch(`${studentApi}/${studentId}`)
    .then((res) => res.json())
    .then(({ student }) => student)
    .catch((error) => console.error(error));
}

async function getGradesInCourse(studentId: string, courseId: string) {
  return fetch(`${gradesApi}/${studentId}?courseId=${courseId}`)
    .then((res) => res.json())
    .then(({ grades }) => grades)
    .catch((error) => console.error(error));
}

async function deleteAllGradesInCourse(courseId: string) {
  return fetch(`${gradesApi}/inCourse/${courseId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).catch((error) => console.error(error));
}

async function deleteAllStudentsInCourse(courseId: string) {
  return fetch(`${studentApi}/inCourse/${courseId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).catch((error) => console.error(error));
}

async function deleteCourse(courseId: string) {
  return fetch(`${courseApi}/${courseId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).catch((error) => console.error(error));
}
