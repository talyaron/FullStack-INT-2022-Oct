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




app.use(express.static(`./public`));
app.use(express.json());

app.post("/api/add-student-grades", addStudentGrads);

app.post("/api/add-mock-student",addMockStudents);

app.get("/api/get-students",getStudents);

app.delete("/api/delete-student", deleteStudent);

app.patch("/api/update-student-name",updateUserName);


import studentsRouter from './API/students/studentsRouter';
import { addMockStudents, addStudentGrads, deleteStudent, getStudents,updateUserName} from "./API/students/studentController";
app.use('/api/students', studentsRouter);

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
