import exp from "constants";
import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Course, CourseSchema } from "../courses/coursesModel";
import { Grade, GradeSchema } from "../grades/gradesModel";

export interface Student {
  grades: any;
  courses: any;
  _id: string;
  name: string;
  lastName: string;
}

export const StudentSchema = new Schema({
  name: String,
  lestName: String,
  courses: CourseSchema,
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;
