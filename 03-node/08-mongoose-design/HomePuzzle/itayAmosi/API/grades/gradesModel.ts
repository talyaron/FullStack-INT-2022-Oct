import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { studentSchema } from "../students/studentsModel";
//schema

export class Grade {
  name: string;
  grade: string;
}

export const GradeSchema = new Schema({
  grade: Number,
  user:studentSchema,
  course:CourseSchema
});

const GradeModel = mongoose.model("student", GradeSchema);

export default GradeModel;