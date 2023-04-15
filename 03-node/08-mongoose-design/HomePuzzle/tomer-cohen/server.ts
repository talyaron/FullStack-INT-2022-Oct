import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();

import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { isUndefined } from "util";
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

app.use(express.json());

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


import studentsRouter from './API/student/studentRoute';
app.use('/api/students', studentsRouter);


import teachersRouter from './API/teachers/teachersRoute';
app.use('/api/teachers', teachersRouter);


import coursesRouter from './API/courses/coursesRoute';
app.use('/api/courses', coursesRouter);


import gradesRouter from './API/grades/gradesRoute';
app.use('/api/grades', gradesRouter);

app.use(express.static(`./public`));

app.listen(3000, () => {
  console.log("server listen on port 000");
});