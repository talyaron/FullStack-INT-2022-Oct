import mongoose, { Schema } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";

export interface IStudent {
  name: string;
  courses?: Course[];
}

export const StudentSchema = new Schema({
  name: String,
  courses: [CourseSchema],
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;