import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { CourseSchema } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";

export class Student {
  public uid: string = uuidv4();
  constructor(
    public name: string,
    public lastName: string,
    public englishClass: number,
    public mathClass: number,
    public sportsClass: number,
    public historyClass: number,
    public avg: number
  ) {}
}

export const StudentSchema = new Schema({
  uid: String,
  name: String,
  lastName: String,
  course: [CourseSchema],
  grades: [GradeSchema],
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;
