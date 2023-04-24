import mongoose, { Schema, Document } from "mongoose";
import { GradeSchema, Grade } from "../grades/gradesModel";
import { StudentSchema } from "../students/studentsModel";

export interface Course extends Document{
    name: string;
    grades: Grade[];
}

export const CourseSchema = new Schema({
    name: String,
    grades: [GradeSchema],
});

const CourseModel = mongoose.model<Course>("courses", CourseSchema);

export default CourseModel;