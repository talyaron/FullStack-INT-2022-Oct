import mongoose, { Schema } from "mongoose";
import {TeacherSchema} from "./TeacherModel";

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
    teachers: [TeacherSchema],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Course>("Course", CourseSchema);
