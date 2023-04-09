import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { StudentSchema } from "../student/studnetsModel";
//schema

export interface Grade {
  // public uid: string = uuid();
  name: string;
  src: string;
}

export const  GradeSchema = new Schema({
  grade: Number,
  student:StudentSchema,
  course:CourseSchema
});

const GradeModel = mongoose.model("users", GradeSchema);

export default GradeModel;