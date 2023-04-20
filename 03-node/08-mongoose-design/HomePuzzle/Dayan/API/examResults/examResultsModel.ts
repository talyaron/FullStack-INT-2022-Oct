import mongoose from 'mongoose'
const { Schema } = mongoose;

//Scheme
export const ExamResultSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
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
            enum: ["failed", "passed"],
            default: "failed",
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject",
        },
    }
)

//Model
const ExamResultModel = mongoose.model('courses',ExamResultSchema)

export default ExamResultModel