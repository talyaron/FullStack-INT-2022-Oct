import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { StudentSchema } from "../students/studentsModel";
import { v4 as uuidv4 } from "uuid";
//schema

export class Grade {
  public uid: string = uuidv4();
  constructor(
  public name: string,
  public grade: [string],
  public student: [string],
  ){}
}

export const GradeSchema = new Schema({
  uid: String,
  name: String,
  grade: [Number],
});

const GradeModel = mongoose.model("gardes", GradeSchema);

export default GradeModel;