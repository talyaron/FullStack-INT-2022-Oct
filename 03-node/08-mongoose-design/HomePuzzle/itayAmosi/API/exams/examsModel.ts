import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { StudentSchema } from "../students/studentsModel";

export interface Exam {
  _id: any;
  name: string;
}


export const ExamSchema = new Schema({
  name: String,
  topic: String,
  questions: Object,
  course: CourseSchema,
});


// export const ExamStudentSchema = new Schema({
//   student: StudentSchema,
//   exam: ExamSchema,
//   course: CourseSchema,
//   grade: Number,

// });


const ExamModel = mongoose.model("exams", ExamSchema);
// export const ExamStudentModel = mongoose.model("exam-students", ExamStudentSchema);

export default ExamModel;
