import mongoose, { Schema } from "mongoose";
import Student from './StudentModel'

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
    students: [Student],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Course>("Course", CourseSchema);
