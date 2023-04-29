import mongoose, { Schema } from "mongoose";
import { StudentSchema } from "./StudentModel";
import { CourseSchema } from "./CourseModel";

interface Grade {
  score: string;
  _id: string;
}

export const GradeSchema: Schema = new Schema(
  {
    score: {
      type: Number,
      required: true,
      max: 100,
      min: 0,
    },
    course: {
      type: CourseSchema,
      required: true,
    },
    student: {
      type: StudentSchema,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Grade>("Grade", GradeSchema);
