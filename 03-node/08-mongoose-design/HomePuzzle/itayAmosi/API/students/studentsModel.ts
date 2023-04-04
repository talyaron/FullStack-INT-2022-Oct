import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


export interface IStudent {
  uid: string;
  name: string;
  englishClass: number;
  mathClass: number;
  sportsClass: number;
  historyClass: number;
  avg: number;
}

export class Student implements IStudent {
  public uid: string = uuidv4();
  constructor(
    public name: string,
    public englishClass: number,
    public mathClass: number,
    public sportsClass: number,
    public historyClass: number,
    public avg: number,
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

const studentSchema = new Schema<IStudent>({
  uid: String,
  name: String,
  englishClass: Number,
  mathClass: Number,
  sportsClass: Number,
  historyClass: Number,
  avg: Number,
});


const StudentModel = mongoose.model<IStudent>("students", studentSchema);


export default StudentModel;


