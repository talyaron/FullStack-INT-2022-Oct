import mongoose, {Schema} from "mongoose";
import { course, courseSchema } from "../course/courseModel";

export interface student {
    _id:string,
    name:string,
    age:number
    courses:course[]
}

export const studentSchema = new Schema({
    name:String,
    age:Number,
    courses:[courseSchema]
});

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;

