import express from "express"

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/random" , (req, res)=>{
    const random  = Math.round(Math.random()*10);
  res.send({number: random.toString()})
})

app.listen(port ,()=>{
    console.log(`The server on port ${port}` );
})


