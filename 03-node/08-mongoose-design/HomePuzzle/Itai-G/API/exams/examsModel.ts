import mongoose, { Schema } from "mongoose";
import { StudentSchema } from "../students/studentModel";


export interface Exam {
  name: string;
}

export const ExamSchema = new Schema({
  name: String,
  topic:String,
  questions:Object,
  student:StudentSchema,
});

export const getStudentsInExamSchema = new Schema ({
    exam:ExamSchema,
    students:StudentSchema
})

const ExamModel = mongoose.model("exams", ExamSchema);

export default ExamModel;