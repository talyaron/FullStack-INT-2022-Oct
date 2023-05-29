import express from "express"
import mongoose from 'mongoose'

import { globalErrHandler, notFoundErr } from "./middlewares/globalErrHandler"

import * as dotenv from 'dotenv'
dotenv.config()

import cookieParser from "cookie-parser"

const PORT = 3000
const app = express()

app.use(express.json())

app.use(express.static('public'))

/*
    The cookie-parser model makes it possible to read and 
    write the cookie values ​​on the server side, 
    in an efficient and easy-to-use manner.
*/
app.use(cookieParser())

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


//-----Routes
import adminRouter from "./API/Admin/adminRouter"
app.use("/api/admins", adminRouter)

import userRouter from "./API/User/userRouter"
app.use("/api/users", userRouter)

import productRouter from "./API/Product/productRouter"
app.use("/api/products", productRouter)

import categoryRouter from "./API/Category/categoryRouter"
app.use("/api/categories", categoryRouter)

import brandRouter from "./API/Brand/brandRouter"
app.use("/api/brands", brandRouter)

import colorRouter from "./API/Color/colorRouter"
app.use("/api/colors", colorRouter)

import reviewRouter from "./API/Review/reviewRouter"
app.use("/api/reviews", reviewRouter)

import orderRouter from "./API/Order/orderRouter"
app.use("/api/orders", orderRouter)


//-----Error middlewares
//טיפול בשגיאות המתקבלות כאשר מבקשים להיכנס לראוט שלא קיים
app.use(notFoundErr)
//טיפול בשגיאות המתקבלות בכל נקודה באפליקציה
app.use(globalErrHandler)




//-----Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
