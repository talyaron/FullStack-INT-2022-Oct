

import express from "express"
const app=express();

app.use(express.static('../client'))
import { randomPic } from "./helpers";

app.get("/randomPicture",(req,res)=>{
res.send(JSON.stringify(randomPic()))

})

app.get("/",(req,res)=>{
    // res.send(`<img src="${randomPic()}" alt="">`)
    })

    app.listen(3000, () => {
        console.log("server listenes on port 3000");
      });

      
