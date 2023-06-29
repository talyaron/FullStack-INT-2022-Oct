import express from "express";
import cors from 'cors';
const app = express();



//static file
app.use(express.static('./client'));

interface Flower{
    img:string;
    name:string;
}

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
