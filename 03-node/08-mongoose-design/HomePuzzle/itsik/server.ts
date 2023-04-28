import express  from "express";
import mongoose,  { Schema } from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()
const app = express();
const PORT = 3000;
const uri:string | undefined = process.env.MONGODB_URI

mongoose.connect(uri).then(()=>{
    console.log("DB connected");
})

app.use(express.json())
app.use(express.static('public'))



import userRoutes from "./API/students/userRoutes";
app.use('/', userRoutes)

app.listen(PORT ,()=>{
    console.log(`the server run on PORT:${PORT}`);
})