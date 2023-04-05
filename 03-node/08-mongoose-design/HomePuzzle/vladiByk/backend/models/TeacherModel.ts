import mongoose, { Schema } from "mongoose";
import CourseSchema from "./CourseModel";

interface Teacher {
  name: string;
}

const TeacherSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course: [CourseSchema]
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Teacher>("Teacher", TeacherSchema);
