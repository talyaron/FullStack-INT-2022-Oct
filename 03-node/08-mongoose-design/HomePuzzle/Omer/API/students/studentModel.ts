import mongoose, {Schema} from "mongoose";

export interface student {
    _id:string,
    name:string,
    age:number
}

export const studentSchema = new Schema({
    name:String,
    age:Number
});

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;

