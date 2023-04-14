class Course {
  constructor(
    public name: string,
    public teachers: string[] = [],
    public _id: string
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

class Student {
  constructor(public name: string, public id: string = "") {}
  async getAverageInCourse(courseId: string) {
    const average = await fetch(`${gradesApi}`)
    // return average.toFixed(2);
  }
}

interface StudentTemplate {
  name: string;
  grades: number[];
  _id: string;
}
