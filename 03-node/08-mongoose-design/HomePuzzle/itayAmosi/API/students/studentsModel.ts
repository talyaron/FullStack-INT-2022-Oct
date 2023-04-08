import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { CourseSchema } from "../courses/coursesModel";

export class Student {
  public uid: string = uuidv4();
  lasName: any;
  constructor(
    public name: string,
    public lastname: string,
    public englishClass: number,
    public mathClass: number,
    public sportsClass: number,
    public historyClass: number,
    public avg: number
  ) {}

  getSimple() {
    return {
      uid: this.uid,
      name: this.name,
      englishClass: this.englishClass,
      mathClass: this.mathClass,
      sportsClass: this.sportsClass,
      historyClass: this.historyClass,
    };
  }
}

export const studentSchema = new Schema({
  uid: String,
  name: String,
  lastname: String,
  englishClass: Number,
  mathClass: Number,
  sportsClass: Number,
  historyClass: Number,
  avg: Number,
  course: [CourseSchema],
});

const StudentModel = mongoose.model("students", studentSchema);

export default StudentModel;
