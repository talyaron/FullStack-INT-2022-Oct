import express from "express";
const app = express();
import * as dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

//to use req. body
app.use(express.json());

dotenv.config();
const uri = process.env.MONGODB_URI;

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

import balloonRouter from "./API/ballons/balloonRouter";
app.use("/api/balloons", balloonRouter);

//static file
app.use(express.static("./client"));

interface Flower {
  img: string;
  name: string;
}

const flowers: Flower[] = [];

app.get("/api/get-word", (req, res) => {
  res.send({ ok: true });
});

app.get("/api/get-flowers", (req, res) => {
  res.send({ ok: true });
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
