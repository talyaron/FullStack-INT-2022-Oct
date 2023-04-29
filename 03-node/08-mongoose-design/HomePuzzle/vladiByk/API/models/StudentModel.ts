import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "./CourseModel";

interface Student {
  name: string;
  grades: [number];
}

export const StudentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    courses: {
      type: [CourseSchema],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Student>("Student", StudentSchema);
