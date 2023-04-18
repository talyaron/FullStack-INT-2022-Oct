import mongoose, { Schema } from "mongoose";
import { Course } from "../courses/coursesModel";
import { Student } from "../students/studentsModel";

export interface Grade {
  _id: any;
  grade: number;
  student: Student[];
  course: Course[];
}

export const GradeSchema = new Schema({
  grade: Number,
  courses: {type:[String]},
  student: {type:[String]},
});

const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;
