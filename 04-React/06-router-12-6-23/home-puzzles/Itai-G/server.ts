import express from "express";

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


import projectRouter from "./API/project/projectRoute";
app.use("/api/project", projectRouter)

import feedBackRouter from "./API/feedback/feedbackRoute";
app.use("/api/feedback", feedBackRouter)
 


app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});


