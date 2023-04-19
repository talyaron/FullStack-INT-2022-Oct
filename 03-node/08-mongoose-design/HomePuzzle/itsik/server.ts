import  bodyParser from 'body-parser';
import express from "express";
import mongoose, {Schema}  from 'mongoose';
import * as dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express();
const Port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// db connect
const uri:string | undefined = process.env.MONGODB_URI;
if(uri){
mongoose.connect(uri)
.then(()=>{
    console.log(`our db is connected`)
    })
}

// imports
import userLoginRoutes from './API/userLogin/userLoginRoutes';
app.use('/API/userLogin', userLoginRoutes)





// server json/static file's
app.use(express.json());
app.use(express.static("./public"));

app.listen(Port,()=>{
    console.log(Port)
} )