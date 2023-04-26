import mongoose from 'mongoose'
import { ISubject, SubjetSchema } from '../subjects/subjectsModel';
import { CourseSchema, ICourse } from '../courses/coursesModel';
const { Schema } = mongoose;

//Interface
export interface IExam extends Document{
    name: string,
    description: string,
    subject: ISubject,
    course: ICourse,
    passMark: number,
    examDate: Date,
}

//Scheme
export const ExamResultSchema = new Schema<IExam>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        subject: SubjetSchema,
        course: CourseSchema,
        passMark: {
            type: Number,
            required: true,
            default: 50,
        },
        examDate: {
            type: Date,
            required: true,
            default: new Date(),
        },
    }
)

//Model
const ExamResultModel = mongoose.model('courses',ExamResultSchema)

export default ExamResultModel