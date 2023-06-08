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



app.post("/api/add-user", async (req, res) => {
  try {
   const {username, password} = req.body;
    res.status(201).send({ ok: true});
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});



import balloonsRouter from "./API/balloons/balloonsRouter";
app.use('/api/balloons', balloonsRouter)



//static file
app.use(express.static("./balloons/public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
