interface Grade {
    grade: number;
    student: Student;
}

interface Course {
    name: string;
    grades: Grade[]
}

interface Student {
    name: string;
    courses: Course[];
  }