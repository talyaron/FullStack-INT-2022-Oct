import mongoose from 'mongoose'
import { ISudent, StudentSchema } from '../students/studentsModel';
import { ISubject, SubjetSchema } from '../subjects/subjectsModel';
const { Schema } = mongoose;

//Interface
export interface IExamResult extends Document{
    student: ISudent,
    passMark: number,
    grade: number,
    status: string,
    subject: ISubject
}

//enum
export enum StatusType{
    FAILED = "failed",
    PASSED = "passed"
}

//Scheme
export const ExamResultSchema = new Schema<IExamResult>(
    {
        student: StudentSchema,
        grade: {
            type: Number,
            required: true,
        },
        passMark: {
            type: Number,
            required: true,
            default: 50,
        },
        status: {
            type: String,
            required: true,
            enum: StatusType,
            default: StatusType.FAILED,
        },
        subject: SubjetSchema,
    }
)

//Model
const ExamResultModel = mongoose.model('courses',ExamResultSchema)

export default ExamResultModel