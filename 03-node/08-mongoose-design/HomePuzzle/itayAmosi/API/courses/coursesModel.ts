import mongoose, { Schema } from "mongoose";
import { TeacherSchema } from "../teachers/teachersModel";
import { ExamSchema } from "../exams/examsModel";
import { GradeSchema } from "../grades/gradesModel";
import { StudentSchema } from "../students/studentsModel";

export interface Course {
  _id: any;
  name: string;
}

export const CourseSchema = new Schema({
  name: String,
  // teacher:TeacherSchema,
  // student:StudentSchema,
  exam: ExamSchema,
  // grades: GradeSchema
});


export const getCoursesByIdsSchema = new Schema({
  course: CourseSchema,
})


const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;


