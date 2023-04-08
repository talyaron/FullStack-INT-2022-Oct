interface Grade {
    grade: number;
    student: Student;
    _id?: string;
}

interface Course {
    name: string;
    grades: Grade[];
    _id?: string;
}

interface Student {
    name: string;
    courses: Course[];
    _id?: string;
  }