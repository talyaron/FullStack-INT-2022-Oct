import express from "express"
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const URI  = process.env.MONGODB_URI

if(URI){
    mongoose.connect(URI).then(()=>{
        console.log("DB connected")
    })
    .catch(err => console.log(err))
}else{
    console.log("no MongoDB URI")
}

//MiddleWare
app.use(express.json());
app.use(express.static("client"))


app.listen(PORT, ()=>{
    console.log(`the server connected with Port:${PORT}`)
})