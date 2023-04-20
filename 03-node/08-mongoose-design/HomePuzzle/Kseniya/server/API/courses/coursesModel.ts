import mongoose, { Schema } from "mongoose";
import { IStudent, studentSchema } from "../students/studentsModel";

export interface ICourse {
    name: string;
    Student?: IStudent[]
}

export const courseSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student'
      }
    ]
  });

const CourseModel = mongoose.model("Course", courseSchema);

export default CourseModel;