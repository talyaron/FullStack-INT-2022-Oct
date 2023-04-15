import mongoose, { Schema } from "mongoose";
// import { TeacherSchema } from "../teachers/teachersModel";


//schema

export interface Course {
  // public uid: string = uuid();
  name: string;
}


export const CourseSchema = new Schema({
  name: String,
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;