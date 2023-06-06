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



app.post("/api/add-user", async (req, res) => {
  try {
   const {username, password} = req.body;
   console.log(username, password)
   
   //register
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    console.log(hash);

    //login
    const isOriginalPasssword = bcrypt.compareSync(password, hash); // true
    console.log("is it the user password? password:",isOriginalPasssword)

    res.status(201).send({ ok: true, login:isOriginalPasssword });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});



//static file
app.use(express.static("./balloons/public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
