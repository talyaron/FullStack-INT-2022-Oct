import { Schema, model, Document } from "mongoose";

export interface Course {
  name: string;
}

export interface Student extends Document {
  firstName: string;
  lastName: string;
  email: string;
  courses: Course[];
}

const CourseSchema = new Schema({
  name: String,
});

const StudentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  courses: [CourseSchema],
});

const StudentModel = model<Student>("Student", StudentSchema);

export default StudentModel;