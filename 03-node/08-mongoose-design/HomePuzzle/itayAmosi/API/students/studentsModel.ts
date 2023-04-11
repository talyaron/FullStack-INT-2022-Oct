import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Course, CourseSchema } from "../courses/coursesModel";
import { Grade, GradeSchema } from "../grades/gradesModel";

export interface Student {
  _id: any;
  name: string;
  lastName: string;
}

export const StudentSchema = new Schema({
  name: String,
  lastName: String,
  courses: CourseSchema,
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;
