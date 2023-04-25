import { Schema, model } from "mongoose";
import StudentModel from "../students/studentModel";


export interface Grade {
    studentId:string;
    courseId:string;
    grade:Number;
}

export const GradeSchema = new Schema ({
    grade:Number,
})
const Grademodel = model('grades', GradeSchema);

export default Grademodel;