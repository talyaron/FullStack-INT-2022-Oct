import express from "express"
import mongoose from 'mongoose'
import morgan from "morgan"

import * as dotenv from 'dotenv'
dotenv.config()

const PORT = 3000
const app = express()

app.use(express.json())

//-----Middleware
app.use(morgan("dev"))

//----- Connect to DB:
const uri: string|undefined = process.env.MONGODB_URI

if(uri){
    mongoose.connect(uri)
    .then(() => {
        console.log("DB Connected Successfully")
    }).catch(err => console.log(err))
}else{
    console.log("DB Connecion Failed")
}

//Routes
import adminRouter from "./API/admin/adminRouter"
app.use("/api/admins", adminRouter)


app.use(express.static('public'))

//-----Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
