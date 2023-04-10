import mongoose, { Schema } from "mongoose";
import { TeacherSchema } from "../../API/teachers/teachersModel";
import { v4 as uuidv4 } from "uuid";
import GradeModel, { Grade, GradeSchema } from "../grades/gradesModel";
//schema

export interface Course {
  _id: any;
  name: string;
}

export const CourseSchema = new Schema({
  name: String,
  // teacher: [TeacherSchema],
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;
