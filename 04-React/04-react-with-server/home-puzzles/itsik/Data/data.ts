import mongoose from "mongoose";

const myData:string | undefined = process.env.MD_MYD;

if(myData){
    mongoose
    .connect(myData)
    .then (()=>{
        console.log("My Db Connected")
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}
