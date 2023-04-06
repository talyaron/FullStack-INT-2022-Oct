import mongoose, { Schema } from "mongoose";
import { StudentSchema } from "./StudentModel";
import { CourseSchema } from "./CourseModel";

interface Grade {
  name: string;
}

export const GradeSchema: Schema = new Schema(
  {
    grade: Number,
    course: CourseSchema,
    student: StudentSchema,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Grade>("Grade", GradeSchema);
