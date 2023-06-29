import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import BalloonsRouter from './API/balloons/balloonsRouter'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const URI = process.env.MONGODB_URI

if (URI) {
    mongoose.connect(URI).then(() => {
        console.log("DB connected");
    }).catch(err => console.log(err))
} else {
    console.log("no found URI");
}

app.use(express.json());
app.use(express.static('./client'));
app.use('/api/balloons' , BalloonsRouter)


app.listen(PORT , ()=>{
    console.log("server connected")
})