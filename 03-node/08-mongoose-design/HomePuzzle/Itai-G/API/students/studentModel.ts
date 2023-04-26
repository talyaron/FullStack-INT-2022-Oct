import mongoose, { Schema, Document } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";

export interface Student extends Document {
  name: string;
  courses: Course[];
}

export const StudentSchema = new Schema({
  name: String,
  grade:GradeSchema
});

const StudentModel = mongoose.model<Student>("students", StudentSchema);

export default StudentModel;