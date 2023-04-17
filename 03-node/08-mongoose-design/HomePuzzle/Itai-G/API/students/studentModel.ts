import mongoose, { Schema, Document } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";

export interface Student {
  name: string;
  courses: Course[];
}

export const StudentSchema = new Schema({
  name: String,
  courses: [CourseSchema],
});

const StudentModel = mongoose.model<Student>("students", StudentSchema);

export default StudentModel;