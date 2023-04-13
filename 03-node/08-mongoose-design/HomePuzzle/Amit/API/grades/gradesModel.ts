import mongoose, { Schema } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";
import { StudentSchema, Student } from "../students/studentsModel";

export interface Grade {
    grade: number;
}

export const GradeSchema = new Schema({
    grade: Number,
});

const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;