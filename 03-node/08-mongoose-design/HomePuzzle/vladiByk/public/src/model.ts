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
  addGrade(btn: HTMLInputElement, newGradeInput: HTMLInputElement) {
    btn.addEventListener("click", () => {
      updateGrade(newGradeInput, this.id);
    });

    newGradeInput.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        updateGrade(newGradeInput, this.id);
      }
    });
  }
  // getAverage() {
  //   const average = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  //   return average.toFixed(2);
  // }
}

interface StudentTemplate {
  name: string;
  grades: number[];
  id: string;
}
