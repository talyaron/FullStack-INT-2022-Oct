import mongoose, { Schema } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";

export interface Student {
  name: string;
  courses?: Course[];
  id: number
}

export const StudentSchema = new Schema({
  name: String,
  courses: [CourseSchema],
  id: Number
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;