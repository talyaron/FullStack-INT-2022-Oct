import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; 
dotenv.config();
const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("DB connected!");
      })
      .catch((err) => console.log(err));
  } else {
    console.log("No URI to DB");
  }

app.use(express.static("./client"));
interface Ballon {
    img: string;
    name: string;
  }
  
  const ballons: Ballon[] = [
    {
      img: "https://cdn.shopify.com/s/files/1/0257/6718/2416/products/Pink-Balloon-NZ-The-Party-Room.jpg?v=1629034351",
      name: "ballon1",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0003/0893/6713/products/Fashion_Red_1024x1024.jpg?v=1561617204",
      name: "ballon2",
    },
    {
      img: "https://partywarehouse.co.nz/image/cache/data/balloon-orange-500x500.jpg",
      name: "ballon3",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0016/7506/7507/products/Metallic_Gold_Latex_Balloons_x_10_x_450_fd08dbd5-64b9-408a-a341-9e5a7f432014_600x.jpg?v=1575917171",
      name: "ballon4",
    },
  ];


app.get("/api/get-word",(req, res)=>{
    res.send({ok:true})
})
app.get("/api/get-ballons",(req, res)=>{
    res.send({ok:true , ballons})
})



app.listen(3000, () => {
  console.log("server listen on port 3000");
});
