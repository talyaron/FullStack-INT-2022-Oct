import mongoose, { Schema } from "mongoose";
import { courseSchema, ICourse } from "../courses/coursesModel";

export interface IStudent {
  name: string;
  courses?: ICourse[];
}

export const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    }
  ]
});

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;