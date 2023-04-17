import mongoose, { Schema } from "mongoose";

export interface Grade {
  _id: any;
  grade: number;
  studentId: string;
  courseId: string;
}

export const GradeSchema = new Schema({
  grade: Number,
  studentId: String,
  courseId: String,
});

const GradeModel = mongoose.model("grades", GradeSchema);

export default GradeModel;
