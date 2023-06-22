import express from 'express' 
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import playerRouter from './API/Player/playerRouter'
dotenv.config()
//env
const app = express()
const PORT =process.env.PORT || 3000 
const URI = process.env.MONGODB_URI
if(URI){
    try {
        mongoose.connect(URI)
        .then(()=>{
            console.log("DB connected")
        })
        .catch(err=>console.error(err))
    } catch (error) {
        console.error(error)
    }
}


app.use(express.json())
app.use(express.static("client"))
app.use("/api/players" , playerRouter)

app.listen(PORT , ()=>{
    console.log(`the server connected to PORT:${PORT}`)
})