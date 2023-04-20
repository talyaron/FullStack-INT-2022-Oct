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

app.post("/api/v1/add-course", async (req,res) => {
    const {newCourseName, teacherId} = req.body;
    console.log(newCourseName, teacherId)
    const courseExists = await CourseModel.findOne({name:newCourseName, teacher:teacherId})
    if (courseExists == null){
        const courseCreation = await CourseModel.create({name:newCourseName, teacher:teacherId, students:[]})
        res.status(201).send({ok:true})
    }
    else {
        res.status(500).send({ok:false})
    }
})

app.post("/api/v1/get-courses", async (req,res) => {
    try {
        const {teacherUsername} = req.body;
        const teacherId = await TeacherModel.findOne(teacherUsername)
        const courses = await CourseModel.find({teacher:teacherUsername})
        console.log(teacherId)
        if (!teacherId) throw new Error("Teacher haven't found!")
        res.status(201).send({courses:courses, teacherId:teacherId['_id']})
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.listen(serverPort, () => {
    console.log(`Server Started at port ${serverPort}`);
});
