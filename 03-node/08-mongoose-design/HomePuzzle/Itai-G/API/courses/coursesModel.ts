import { Schema, model } from "mongoose";
import StudentModel from "../students/studentModel";

export interface Course {
    name:string;
}

export const CourseSchema = new Schema ({
    name:String,
})
const CourseModel = model('Course', CourseSchema);

export default CourseModel;