import mongoose, { Schema } from "mongoose";
import { GradeSchema, Grade } from "../grades/gradesModel";
import { StudentSchema } from "../students/studentsModel";

export interface Course {
    name: string;
    grades: Grade[];
}

export const CourseSchema = new Schema({
    name: String,
    grades: [GradeSchema],
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;