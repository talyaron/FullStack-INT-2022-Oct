import express from "express"
import mongoose from 'mongoose'
// import morgan from "morgan"

import {globalErrHandler, notFoundErr} from "./middlewares/globalErrHandler"

import * as dotenv from 'dotenv'
dotenv.config()

const PORT = 3000
const app = express()

//-----Connect to DB:
const uri: string|undefined = process.env.MONGODB_URI

if(uri){
    mongoose.connect(uri)
    .then(() => {
        console.log("DB Connected Successfully")
    }).catch(err => console.log(err))
}else{
    console.log("DB Connecion Failed")
}

//-----Middleware
app.use(express.json())

// app.use(morgan("dev"))

//-----Routes
import adminRouter from "./API/admin/adminRouter"
app.use("/api/admins", adminRouter)

import courseRouter from "./API/courses/coursesRouter"
app.use("/api/courses", courseRouter)

//-----Error middlewares
//טיפול בשגיאות המתקבלות כאשר מבקשים להיכנס לראוט שלא קיים
app.use(notFoundErr)
//טיפול בשגיאות המתקבלות בכל נקודה באפליקציה
app.use(globalErrHandler)

app.use(express.static('public'))

//-----Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
