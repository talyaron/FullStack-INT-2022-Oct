// express
import express from "express";
const app = express();
const serverPort = 5000;

// DB
import mongoose from "mongoose";
const { Schema } = mongoose;

// dotenv
import * as dotenv from "dotenv";
dotenv.config();

mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => console.log("DB connected!"));


const TeacherSchema = new Schema({
    name: String,
    });

const CourseSchema = new Schema({
    name: String,
    teacher: TeacherSchema,
    students:[{name: String, grade: Number}]
    });

const TeacherModel = mongoose.model("teachers", TeacherSchema)
const CourseModel = mongoose.model("courses", CourseSchema)


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
app.post("/api/v1/get-courses", async (req,res) => {
    const {teacherUsername} = req.body;
    const courses = await CourseModel.find({teacher:teacherUsername})
    console.log(courses)
    res.status(201).send(courses)
})


app.listen(serverPort, () => {
    console.log(`Server Started at port ${serverPort}`);
});
