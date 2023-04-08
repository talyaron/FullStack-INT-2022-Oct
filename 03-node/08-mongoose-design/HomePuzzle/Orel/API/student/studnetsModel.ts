import mongoose ,{Schema} from 'mongoose'
import { CourseSchema } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";

export interface Student{
    name:string,
    email:string,
    address:string,
    phoneNumber:number,
}

export const StudentSchema = new Schema({
name:String,
email:String,
address:String,
phoneNumber:Number,
courses:[CourseSchema],
grades:[GradeSchema]
});

const StudentModel = mongoose.model("students" , StudentSchema);

export default StudentModel