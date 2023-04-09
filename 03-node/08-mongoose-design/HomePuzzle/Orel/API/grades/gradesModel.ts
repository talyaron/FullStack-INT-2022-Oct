import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { StudentSchema } from "../student/studnetsModel";
import { TeacherSchema } from "../teachers/teachersModel";
//schema

export interface Grade {
  studentName: string;
  assignmentName:string ,
  score:number,
  date:string
}

export const  GradeSchema = new Schema({
  studentName: StudentSchema,
  courseName:CourseSchema,
  teacherName:TeacherSchema,
  assignmentName:String ,
  score:Number,
  date:String
});

const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;