import express from "express";
import cors from "cors"
const app = express();
const PORT = 5000;
app.use(cors)
app.use(express.static('./public'))
app.get("/",(req,res)=>{
   
    })

app.listen(PORT,()=>{
    console.log(`server listen at: ${PORT}`)
})