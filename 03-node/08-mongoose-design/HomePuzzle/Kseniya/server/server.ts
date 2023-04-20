import express from "express";
const app = express();
const cors = require('cors')
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

//connecting DB//
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

//getting data from public
app.use(express.json(), cors());

//connecting to entities routes//
import studentsRouter from './API/students/studentsRoute';
app.use('/students', studentsRouter);

import coursesRouter from './API/courses/coursesRoute';
app.use('/courses', coursesRouter);

import gradesRouter from './API/grades/gradesRoute';
app.use('/grades', gradesRouter);


app.listen(3001, () => {
  console.log("server listen on port 3001");
});
