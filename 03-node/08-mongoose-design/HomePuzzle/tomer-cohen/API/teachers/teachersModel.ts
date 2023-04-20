import mongoose, { Schema } from "mongoose";
import { Course, CourseSchema } from "../courses/coursesModel";

export interface Teacher {
  _id: string;
  name: string;
  lastName: string;
  courses: Course[];
}

export const TeacherSchema = new Schema({
  name: String,
  lastName: String,
  courses: {type:[String]},
});

const TeacherModel = mongoose.model("teachers", TeacherSchema);

export default TeacherModel;
