import express from "express";
const app = express()
import "./Data/data"
import mongoose from "mongoose";

app.use(express.json)
app.use(express.static('./client'));






app.listen(3000, ()=>{
    console.log("3000")
})