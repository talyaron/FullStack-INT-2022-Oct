import express from "express";
import mongoose, {Schema}  from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const Port = 3030;

app.use(express.json());
app.use(express.static("./public"));

app.listen(Port,()=>{
    console.log(Port)
} )