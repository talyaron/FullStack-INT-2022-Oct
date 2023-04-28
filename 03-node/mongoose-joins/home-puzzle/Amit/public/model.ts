interface Student {
    name: string;
    courses: Course[];
    _id?: string;
}

interface Course {
    name: string;
    grades: Grade[];
    _id?: string;
}

interface Grade {
    grade: number;
    _id?: string;
}