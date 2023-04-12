const courseApi = "http://localhost:3000/api/v1/courses";
const coursesRoot = document.querySelector("#coursesRoot") as HTMLDivElement;
class Course {
  constructor(
    public name: string,
    public teachers: string[] = [],
    public id: string
  ) {}
  async getStudents() {
    const students = await fetch("/api/v1/students").then;
    return "student list";
  }
}

interface CourseTemplate {
  name: string;
  teachers: string[];
  _id: string;
}

const displayCourses = async () => {
  try {
    const coursesList = await fetch(courseApi)
      .then((res) => res.json())
      .then(({ courses }) =>
        courses.map(
          (course: CourseTemplate) =>
            new Course(course.name, course.teachers, course._id)
        )
      );
    if (coursesList) renderCourses(coursesList);
  } catch (error) {
    console.error(error);
  }
};

function renderCourses(coursesList: Course[]) {
  coursesRoot.innerHTML = coursesList
    .map(
      (course) =>
        `<a href="./students.html" class="course" id="${course.id}">${course.name}</a>`
    )
    .join("");
}

async function deleteCourse(courseId: string) {
  await fetch(`${courseApi}/${courseId}`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
}

displayCourses();
