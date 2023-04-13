import mongoose, {Schema} from "mongoose";
import { course, courseSchema } from "../course/courseModel";
import { grade, gradeScheme } from "../grade/gradeModel";

export interface student {
    _id:string,
    name:string,
    age:number
    courses:course[]
    grades:grade[]
}

export const studentSchema = new Schema({
    name:String,
    age:Number,
    courses:[courseSchema],
    grades:[gradeScheme]
});

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;

