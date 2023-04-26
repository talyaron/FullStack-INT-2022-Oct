import mongoose, { Schema } from "mongoose";
import { StudentSchema } from "../students/studentsModel";
import { ExamSchema } from "../exams/examsModel";
import { CourseSchema } from "../courses/coursesModel";

export interface Grade {
  _id: any;
  grade: number;
  studentId: string;
  courseId: string;
}

export const GradeSchema = new Schema({
  grade: Number,
});


const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;
