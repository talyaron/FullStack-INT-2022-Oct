import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { CourseSchema } from "../courses/coursesModel";

export interface Teacher {
  _id: string;
  name: string;
  lastName: string;
  course:typeof CourseSchema;
}

export const TeacherSchema = new Schema({
  name: String,
  lastName: String,
});

const TeacherModel = mongoose.model("teachers", TeacherSchema);

export default TeacherModel;
