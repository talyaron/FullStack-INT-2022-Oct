import mongoose, { Schema } from "mongoose";
import { TeacherSchema } from "../teachers/teachersModel";
import { v4 as uuidv4 } from "uuid";
import GradeModel, { GradeSchema } from "../grades/gradesModel";
//schema

export class Course {
  public uid: string = uuidv4();
  constructor(
    public name: [string],
    public teachers: [string],

  ) {}
}

export const CourseSchema = new Schema({
  uid: String,
  name: String,
  grades: [GradeSchema],
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;
