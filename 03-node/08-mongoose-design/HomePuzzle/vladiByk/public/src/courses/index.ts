class Course {
  constructor(public name: string, public students: string[] = []) {}
  async getStudents(){
    const students = await fetch("/api/v1/students").then
    return 'student list'
  }
}

const displayCourses = async () => {
  try {
    const coursesList = await fetch(apiUrl)
      .then((res) => res.json())
      .then(({ courses }) =>
        courses.map(
          (student: StudentTemplate) =>
            new Student(student.name, student.grades, student._id)
        )
      );
    if (coursesList) renderCourses(coursesList);
  } catch (error) {
    console.error(error);
  }
};

function renderCourses(coursesList:string[]){

}