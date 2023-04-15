import mongoose, { Schema } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";
import { GradeSchema, Grade } from "../grades/gradesModel";

export interface Student {
  name: string;
  courses: Course[];
}

export const StudentSchema = new Schema({
  name: String,
  courses: [CourseSchema],
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;