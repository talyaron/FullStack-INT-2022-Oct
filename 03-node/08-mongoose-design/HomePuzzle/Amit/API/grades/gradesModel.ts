import mongoose, { Schema, Document } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";
import { StudentSchema, Student } from "../students/studentsModel";

export interface Grade extends Document  {
    grade: number;
}

export const GradeSchema = new Schema({
    grade: Number,
});

const GradeModel = mongoose.model<Grade>("grades", GradeSchema);

export default GradeModel;