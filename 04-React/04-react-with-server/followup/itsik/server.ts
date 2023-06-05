import express from "express";
import cors from 'cors';
const app = express();

// app.use(cors({
//   credentials:true,
//   origin:"http://localhost:5173"
// }));

//static file
app.use(express.static('./client'));

interface Prime{
    img:string;
    name?:string;
    info?:string;
}

const primeMinisters:Prime[] = [
  {img:"https://shorturl.at/dATU4", 
   name:"Bibi",
   info:""
  },
   {img:"https://shorturl.at/wTU19",
    name:"Golda",
    info:""

  },
  {img:"https://shorturl.at/mtOR5",
   name:"Barak",
   info:"",
}

]



app.get("/api/get-flowers",(req, res)=>{
    res.send({ok:true})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
