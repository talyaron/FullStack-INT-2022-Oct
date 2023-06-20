import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import routerPages from './pagesRouter';
import routerUsers from './API/users/usersRouters';
import cookieParser from 'cookie-parser';
import routerProduct from './API/products/productsRouters'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3002
const uri = process.env.MONGODB_URI
app.use(cookieParser());
app.use(express.json())
app.use(express.static("public"))
console.log(uri)

    if(uri){
        mongoose.connect(uri).then(()=>{
            console.log(`DB connected`);
        })
        .catch(err=>console.log(err))
    } else{
        console.log("no found uri ");
    }

    app.use('/' , routerPages)
    app.use('/api/users' , routerUsers)
    app.use('/api/products' , routerProduct)
    if(!PORT) throw new Error("no found PORT number")

app.listen(PORT , ()=>{
    console.log(`the server connect to PORT :${PORT}`);
})