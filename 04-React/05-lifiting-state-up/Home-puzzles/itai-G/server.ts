import express from "express";
import bcrypt from 'bcryptjs';

const app = express();

import * as dotenv from "dotenv";
dotenv.config();
app.use(express.json());


import mongoose from "mongoose";
require('dotenv').config()

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



import playersRouter from "./API/playersRouter";
app.use('/api/players', playersRouter)



//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
