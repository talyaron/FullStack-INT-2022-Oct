import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();

import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { isUndefined } from "util";
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

const studentSchema = new Schema({
  name: String,
  englishClass: Number,
  mathClass: Number,
  sportsClass: Number,
  uid: String,
  historyClass: Number,
});

const StudentModel = mongoose.model("students", studentSchema);

app.use(express.static(`./public`));
app.use(express.json());

//data
export interface IStudent {
  uid: string;
  name: string;
  englishClass: number;
  mathClass: number;
  sportsClass: number;
  historyClass: number;
}
export class Student implements IStudent {
  public uid: string = uuidv4();
  constructor(
    public name: string,
    public englishClass: number,
    public mathClass: number,
    public sportsClass: number,
    public historyClass: number,
  ) {
    this.name = name;
    this.englishClass = englishClass;
    this.mathClass = mathClass
    this.sportsClass = sportsClass
    this.historyClass = historyClass
    this.uid = uuidv4()
  }

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

const students: Student[] = [new Student("Moshe", 68, 59, 95, 75)];

export class Teacher {
  public uid: string = uuidv4();
  constructor(public name: string, public password: number) {}

  getSimple() {
    return {
      uid: this.uid,
      name: this.name,
      password: this.password,
    };
  }
}
const teachers: Teacher[] = [new Teacher("tal", 1235)];

app.post("/api/add-student-grades", async (req, res) => {
  const { name, englishClass, mathClass, sportsClass, historyClass } = req.body;
  console.log(req.body);
  if (!name || !englishClass || !mathClass || !sportsClass || !historyClass) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newStudent = await StudentModel.create({     
    name,
    englishClass,
    mathClass,
    sportsClass,
    historyClass,
  });
  // students.push(newStudent);
  res.status(200).send({ ok: true, newStudent });
});

app.get("/api/get-students",async (req, res) => {
  try {
    const students = await StudentModel.find({});
    
    res.send({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-student",async (req, res) => {
  try {
    const { uid } = req.body;
    if (!uid) throw new Error("no uid in data");
    const index = await students.findIndex(student => student.uid === uid);
    if (index === -1)
      throw new Error(`couldnt find student in students, with uid ${uid}`);
    
      students.splice(index, 1);
    const _student = students.map((student) => student.getSimple());
    
    res.send({ ok: true, Student:_student});
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});


app.listen(4000, () => {
  console.log("server listen on port 4000");
});

