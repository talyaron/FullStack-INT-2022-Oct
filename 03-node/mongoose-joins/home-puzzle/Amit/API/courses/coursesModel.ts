import mongoose, { Schema, Document } from "mongoose";
import { GradeSchema, Grade } from "../grades/gradesModel";
import { StudentSchema } from "../students/studentsModel";

export interface Course extends Document {
    name: string;
}

export const CourseSchema = new Schema({
    name: String,
});

export const CourseStudentSchema = new Schema({
    student: StudentSchema,
    course: CourseSchema,
})


export const CourseStudentModel = mongoose.model("course-students", CourseStudentSchema);

const CourseModel = mongoose.model<Course>("courses", CourseSchema);
export default CourseModel;
