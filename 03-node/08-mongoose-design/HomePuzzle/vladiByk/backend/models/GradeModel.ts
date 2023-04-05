import mongoose, { Schema } from "mongoose";
import StudentModel from "./StudentModel";
import CourseModel from "./CourseModel";

interface Grade {
  name: string;
  src: string;
}

const GradeSchema = new Schema({
  grade: Number,
  user: StudentModel,
  course: CourseModel,
});

export default mongoose.model<Grade>("users", GradeSchema);
