import mongoose, { Schema } from "mongoose";
import { Course, CourseSchema } from "../courses/coursesModel";

export interface Student {
  _id: string;
  name: string;
  lastName: string;
  courses: Course[];
  grades: number[];
}

export const StudentSchema = new Schema({
  name: String,
  lastName: String,
  courses: {type:[String]},
  grades: {type:[Number]},
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;