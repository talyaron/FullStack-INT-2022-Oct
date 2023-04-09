import mongoose ,{Schema} from 'mongoose'

export interface Student{
    name:string,

}

export const StudentSchema = new Schema({
name:String,
});

const StudentModel = mongoose.model("students" , StudentSchema);

export default StudentModel