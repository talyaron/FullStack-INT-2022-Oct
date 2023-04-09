import mongoose from "mongoose"
import express  from "express";
import * as dotenv from 'dotenv'
import coursesRoute from './API/courses/coursesRoute';
import gradesRouter from './API/grades/gradeRouter'

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
app.use(express.static('public'))


app.use('/courses', coursesRoute);
app.use('/grades', gradesRouter);







app.listen(PORT ,()=>{
    console.log(`the server run on PORT:${PORT}`);
})