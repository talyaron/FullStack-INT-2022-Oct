import express from "express";
import fs from "fs";
const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
    const indexFile = fs.readFileSync("./public/index.html", {
        encoding: "utf8",
        flag: "r",
      })
      res.send(indexFile)
})



app.listen(3000 , ()=>{
    console.log("port On ");
})