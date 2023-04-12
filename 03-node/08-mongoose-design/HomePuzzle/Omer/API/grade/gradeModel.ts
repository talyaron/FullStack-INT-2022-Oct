import mongoose from "mongoose";

export interface grade {
    _id:string
    courseName:string,
    gradeNum:number[]
}

export const gradeScheme = new mongoose.Schema({
    studentId:String,
    courseName:String,
    gradeNum:[Number]
});

const gradeModel = mongoose.model('grade', gradeScheme);

export default gradeModel;