import mongoose, { Schema } from "mongoose";
import { CourseSchema, Course } from "../courses/coursesModel";
import { StudentSchema, Student } from "../students/studentsModel";

export interface Grade {
    grade: number;
    student: Student;
    course: Course;
}

export const GradeSchema = new Schema({
    name: String,
});

const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;