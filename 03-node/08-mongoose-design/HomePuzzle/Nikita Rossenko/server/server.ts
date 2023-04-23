// express
import express from "express";
const app = express();

// DB
import mongoose from "mongoose";
const serverPort = 5000;

// dotenv
import * as dotenv from "dotenv";
import exp from "constants";
dotenv.config();

mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => console.log("DB connected!"));

// express USE
app.use(express.static('public/index'));
app.use(express.static('public'));
app.use(express.json())

app.post("/api/v1/add-teacher", (req,res) => {
    const newTeacher = req.body;
    console.log(newTeacher)
})


app.listen(serverPort, () => {
    console.log(`Server Started at port ${serverPort}`);
});
