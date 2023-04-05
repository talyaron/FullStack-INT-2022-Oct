import mongoose, { Schema } from "mongoose";
import CourseSchema from "./CourseModel";

interface Student {
  name: string;
  grades: [number];
}

const StudentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    grades: [Number],
    course: [CourseSchema]
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Student>("Student", StudentSchema);
