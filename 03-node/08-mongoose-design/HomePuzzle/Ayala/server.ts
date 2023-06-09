import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

//to be able to get data from client add this line
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


import usersRouter from './API/users/usersRoute';
app.use('/api/users', usersRouter);


//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
