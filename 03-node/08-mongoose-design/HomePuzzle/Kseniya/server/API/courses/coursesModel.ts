import mongoose, { Schema } from "mongoose";
import { IStudent, StudentSchema } from "../students/studentsModel";

export interface Course {
    name: string;
    students?: IStudent[]
}

export const CourseSchema = new Schema({
    name: String,
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;