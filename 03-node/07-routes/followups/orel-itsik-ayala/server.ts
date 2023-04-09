import express from "express";
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; 
dotenv.config();

const app = express()
const PORT = 3000;

app.use(express.json())
app.use(express.static("public"))

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
  
  import usersRouter from './API/users/usersRoute';
  app.use('/api/users', usersRouter);
  

app.listen(PORT, ()=>{
    console.log(`the server on PORT:${PORT}`);
})