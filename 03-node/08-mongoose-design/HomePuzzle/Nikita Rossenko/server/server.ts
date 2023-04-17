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

app.post("/api/v1/add-teacher", async (req,res) => {
    const {teacherUsername} = req.body;
    const teacherExists = await TeacherModel.findOne({name:teacherUsername})
    if (teacherExists == null){
        const teacherCreation = await TeacherModel.create({name:teacherUsername})
        res.status(201).send({ok:true})
    }
    else {
        res.status(500).send({ok:false})
    }
})

app.post("/api/v1/add-course", async (req,res) => {
    const {newCourseName, teacherId} = req.body;
    const teacherExists = await CourseModel.findOne({name:newCourseName, teacher:teacherId})
    if (teacherExists == null){
        const teacherCreation = await TeacherModel.create({name:teacherUsername})
        res.status(201).send({ok:true})
    }
    else {
        res.status(500).send({ok:false})
    }
})

app.post("/api/v1/get-courses", async (req,res) => {
    const {teacherUsername} = req.body;
    const courses = await CourseModel.find({teacher:teacherUsername})
    console.log(courses)
    res.status(201).send(courses)
})


app.listen(serverPort, () => {
    console.log(`Server Started at port ${serverPort}`);
});
