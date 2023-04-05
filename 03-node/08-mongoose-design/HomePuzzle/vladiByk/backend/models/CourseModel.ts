import mongoose, { Schema } from "mongoose";
import { StudentSchema } from "./StudentModel";
import {TeacherSchema} from "./TeacherModel";

interface Course {
  name: string;
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
