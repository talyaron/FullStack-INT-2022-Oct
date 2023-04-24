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
  exams: ExamSchema,
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;
