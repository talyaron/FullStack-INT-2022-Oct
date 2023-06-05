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

const flowers:Flower[] = [{img:"https://i.pinimg.com/originals/29/0f/1b/290f1b428558bfc7edf951ccee7f52b6.jpg",name:"White Rose"},{img:"https://images.photowall.com/products/45171/dark-red-rose.jpg?h=699&q=85",name:"Red Rose"}]
// const flowers:Flower[] = []

app.get("/api/get-word",(req, res)=>{
    res.send({ok:true,flowers})
})

app.get("/api/get-flowers",(req, res)=>{
    res.send({ok:true})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
