class Teacher {
  constructor(public name: string) {}
}

interface TeacherTemplate {
  name: string;
  _id: string;
}

class Student {
  constructor(
    public name: string,
    public id: string,
    private courseId: string = ""
  ) {}

  async getAverageInCourse(courseId: string) {
    try {
      const grades: number[] = await fetch(
        `${gradesApi}/${this.id}?courseId=${courseId}`
      )
        .then((res) => res.json())
        .then(({ grades }) => grades.map((grade: GradeTemplate) => grade.score))
        .catch((error) => console.error(error));

      const gradesAverage = grades.reduce((a, b) => a + b, 0) / grades.length;

      return gradesAverage;
    } catch (error) {
      console.log(error);
    }
  }
}

interface StudentTemplate {
  name: string;
  course: CourseTemplate;
  _id: string;
}

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
  teachers: [TeacherTemplate];
  _id: string;
}

class Grade {
  constructor(
    public score: number,
    public course: string,
    public student: string
  ) {}
}

interface GradeTemplate {
  score: number;
  course: CourseTemplate;
  student: StudentTemplate;
  _id: string;
}
