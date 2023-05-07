import mongoose, { Schema } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";

export interface IStudent {
  name: string;
}

export const StudentSchema = new Schema({
  name: String
});


const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;