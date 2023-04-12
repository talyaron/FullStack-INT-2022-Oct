import mongoose from "mongoose";

export interface grade {
    courseName:string,
    gradeNum:number
}

export const gradeScheme = new mongoose.Schema({
    courseName:String,
    gradeNum:Number
});

const gradeModel = mongoose.model('grade', gradeScheme);

export default gradeModel;