import mongoose, { Schema } from "mongoose";
import StudentSchema from "./StudentModel";
import TeacherSchema from "./TeacherModel";

interface Course {
  name: string;
  grades: [number];
}

const CourseSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    students: [StudentSchema],
    teacher: {
      type: TeacherSchema,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Course>("Course", CourseSchema);
