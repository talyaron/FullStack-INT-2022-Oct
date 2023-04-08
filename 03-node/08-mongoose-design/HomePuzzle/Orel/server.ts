import mongoose from "mongoose"
import express  from "express";
import * as dotenv from 'dotenv'

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

 
import coursesRoute from './API/courses/coursesRoute';
app.use('/api/student', coursesRoute);


app.use(express.json())
app.use(express.static('public'))



app.listen(PORT ,()=>{
    console.log(`the server run on PORT:${PORT}`);
})