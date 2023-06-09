import mongoose, { Schema } from "mongoose";
import { TeacherSchema } from "./TeacherModel";

interface Course {
  name: string;
  teachers: [];
}

export const CourseSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teachers: {
      type: [TeacherSchema],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Course>("Course", CourseSchema);
