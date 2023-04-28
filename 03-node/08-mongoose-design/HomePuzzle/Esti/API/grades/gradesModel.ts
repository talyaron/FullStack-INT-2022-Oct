import mongoose, { Schema } from "mongoose";
import { CoursesSchema } from "../courses/coursesModel";
import { StudentsSchema } from "../student/studnetsModel";
import { TeachersSchema } from "../teachers/teachersModel";
//schema

export interface Grade {
  studentName: string;
  couresName: string ,
  score: number,
  // date: string
}

export const  GradesSchema = new Schema({
  studentName: StudentsSchema,
  courseName: CoursesSchema,
  teacherName: TeachersSchema,
  couresName: CoursesSchema ,
  score: Number,
  // date:String
});

const GradesModel = mongoose.model("grades", GradesSchema);

export default GradesModel;