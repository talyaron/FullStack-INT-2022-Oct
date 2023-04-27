import mongoose, { Schema } from "mongoose";
import { Course, CourseSchema } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";
import { ExamSchema } from "../exams/examsModel";

export interface Student {
  _id: string;
  name: string;
  lastName: string;
  courses: Course[];
  grades: number[];
}

export const StudentSchema = new Schema({
  name: String,
  lastName: String,
  grades: GradeSchema,
});

export const GradesByStudentSchema = new Schema({
  name: String,
  grades: GradeSchema,
  student: StudentSchema,
});

const StudentModel = mongoose.model("students", StudentSchema);
export const StudentGradesModel = mongoose.model("student-Grades", GradesByStudentSchema);

export default StudentModel;
