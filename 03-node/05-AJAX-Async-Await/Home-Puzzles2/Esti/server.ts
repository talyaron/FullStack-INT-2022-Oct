 
import exprss from "express";
// import path from "path";
// import v4 from 'uuid';
// import { foodTips } from "./public/module";
import mongoose from 'mongoose';
// import { error } from "console";
import * as dotenv from 'dotenv'
dotenv.config()

const uri: string|undefined = process.env.MONGODB_URI;

if(!uri){
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected")
    })
    .catch(err => console.log(err))
}else{
    console.log("No Uri DB")
}

const PORT = 3000;
const app = exprss();


app.use(exprss.static("./public"));

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "index.html"));
//   });

//   app.get('/foodTips', (req, res) => {
//     const jsonData = JSON.stringify(foodTips);
//     res.send(jsonData);
//   });

app.listen(PORT, () => {
    console.log(`Server lister on port: ${PORT}`);
})
