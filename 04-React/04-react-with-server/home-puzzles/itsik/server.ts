import express from "express";
const app = express()
import "./Data/data"
import cors from "cors"

app.use(express.json, cors())
app.use(express.static('./client'));

import ballonRouter from "./APi/ballons/ballonRoutes";

app.use('/api/ballons', ballonRouter)


app.listen(3000, ()=>{
    console.log("3000")
})