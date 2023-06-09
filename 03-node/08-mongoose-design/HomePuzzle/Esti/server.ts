// import mongoose from "mongoose"
import express  from "express";
import * as dotenv from 'dotenv'
import mongoose, { Schema } from "mongoose";
import coursesRoute from './API/courses/coursesRoute';
import gradesRoute from './API/grades/gradeRoute'
import studentRoute from "./API/student/studentsRoute";
import teacherRoute from "./API/teachers/teachersRoute";



dotenv.config()

const uri:string | undefined = process.env.MONGODB_URI

if(uri){
    mongoose.connect(uri).then(()=>{
        console.log("DB connected");
    })
    .catch(err=>console.error(err))
}else{
    console.log("no founded uri MongoDB");
}

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.static('./public'))


app.use('/api/courses', coursesRoute);
app.use('/api/grades', gradesRoute);
app.use('/api/student', studentRoute);
app.use('/api/teacher', teacherRoute);


app.listen(PORT ,()=>{
    console.log(`the server run on PORT:${PORT}`);
})