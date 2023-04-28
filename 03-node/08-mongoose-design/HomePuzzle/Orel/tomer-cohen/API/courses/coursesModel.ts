import mongoose, { Schema } from "mongoose";
import { TeacherSchema } from "../../API/teachers/teachersModel";
import { v4 as uuidv4 } from "uuid";
import GradeModel, { Grade, GradeSchema } from "../grades/gradesModel";

export interface Course {
  _id: any;
  name: String;
}

export const CourseSchema = new Schema({
  name: String,
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;
