import { Schema, model } from "mongoose";
import StudentModel from "../students/studentModel";
import { ExamSchema } from "../exams/examsModel";

export interface Course {
    name:string;
}

export const CourseSchema = new Schema ({
    name:String,
    exam:ExamSchema
})
const CourseModel = model('Course', CourseSchema);

export default CourseModel;