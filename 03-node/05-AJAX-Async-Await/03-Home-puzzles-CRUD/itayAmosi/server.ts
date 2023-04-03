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

export interface IStudent {
  uid: string;
  name: string;
  englishClass: number;
  mathClass: number;
  sportsClass: number;
  historyClass: number;
  avg: number;
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

app.use(express.static(`./public`));
app.use(express.json());

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
    uid: uuidv4(),
  });
  // students.push(newStudent);
  res.status(200).send({ ok: true, newStudent });
});

app.post("/api/add-mock-student", async (req, res) => {
  const newStudent = await StudentModel.create({
    name:uuidv4().slice(0,7),
    englishClass: 70,
    mathClass: 80,
    sportsClass: 90,
    historyClass: 89,
    uid: uuidv4(),
    avg:564,
  });
  res.status(200).send({ ok: true, newStudent });
});

app.get("/api/get-students", async (req, res) => {
  try {
    const students = await StudentModel.find({});

    res.send({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-student", async (req, res) => {
  try {
    const uid = req.body.uid;
    if (!uid) throw new Error("Invalid to find uid");
    await StudentModel.deleteOne({ uid });

    res.sendStatus(200);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});



app.patch("/api/update-student-name",async (req, res) => {
  try {
    const { name, uid } = req.body;
    console.log(name, uid)
    if (!name) throw new Error("No name in data");
    if (!uid) throw new Error("No uid in data");
    const student = await StudentModel.findOneAndUpdate({uid}, {name});
    if (!student) throw new Error("No student in array");
    console.log(student)
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
