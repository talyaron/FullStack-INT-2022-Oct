import express from "express";
const app = express();
import * as dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();
const uri= process.env.MONGODB_URI;
//בלי זה אין אפשרות להשתמש בreq.body
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
  };

  app.use(express.static("./client"));
  
import projectRouter from "./API/projectsRouter";
app.use("/api/projects", projectRouter)


app.listen(3000, () => {
    console.log("server listen on port 3000");
  });