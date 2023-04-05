class Student {
  constructor(
    public name: string,
    public grades: number[] = [],
    public _id: string = ""
  ) {}
  addGrade(grade: number) {
    this.grades.push(grade);
  }
  getAverage() {
    const average = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    return average.toFixed(2);
  }
}

interface StudentTemplate {
  name: string;
  grades: number[];
  _id: string;
}
