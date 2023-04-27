import mongoose, { Schema, Document } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";
import { GradeSchema, Grade } from "../grades/gradesModel";

export interface Student extends Document {
  name: string;
}

export const StudentSchema = new Schema({
  name: String,
});

const StudentModel = mongoose.model<Student>("students", StudentSchema);

export default StudentModel;
