import express from "express";
import cors from 'cors';
const app = express();

// app.use(cors({
//   credentials:true,
//   origin:"http://localhost:5173"
// }));

//static file
app.use(express.static('./client'));

interface Flower{
    img:string;
    name:string;
}

const flowers:Flower[] = []

app.get("/api/get-word",(req, res)=>{
    res.send({ok:true})
})

app.get("/api/get-flowers",(req, res)=>{
    res.send({ok:true})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
