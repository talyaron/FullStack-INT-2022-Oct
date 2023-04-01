//server
import * as dotenv from "dotenv";
dotenv.config();

//express
import express from "express";
const app = express();
app.use(express.json())

//mongoose
import mongoose, { Schema } from "mongoose";

const uri: string | undefined = process.env.MONGODB_URI;

//connecting to the DB
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

// schema
const UserSchema = new Schema({
    name: String, 
    src: String
})

const UserModel = mongoose.model('users', UserSchema)