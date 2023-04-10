import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { StudentSchema } from "../students/studentsModel";
import { v4 as uuidv4 } from "uuid";
//schema

export interface Grade {
  _id: any;
  grade: number;
  gradCourse:typeof CourseSchema;
}

export const GradeSchema = new Schema({
  grade: Number,
  gradCourse: CourseSchema,
  // students: StudentSchema,
  // courses: CourseSchema,
});

const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;
