import { Schema, model } from "mongoose";
import StudentModel from "../students/studentModel";


export interface Grade {
    studentId:string;
    courseId:string;
    grade:Number;
}

export const GradeSchema = new Schema ({
    studentId:String,
    courseId:String,
    grade:Number,
})
const Grademodel = model('grade', GradeSchema);

export default Grademodel;