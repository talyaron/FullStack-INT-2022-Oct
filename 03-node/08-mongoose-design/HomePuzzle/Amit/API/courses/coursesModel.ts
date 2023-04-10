import mongoose, { Schema } from "mongoose";
import { GradeSchema } from "../grades/gradesModel";
import { StudentSchema } from "../students/studentsModel";

export interface Course {
    name: string;
}

export const CourseSchema = new Schema({
    name: String,
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;