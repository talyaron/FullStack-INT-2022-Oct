import express from 'express'
import fs from "fs";
const app = express()

app.use(express.static(__dirname + `/public`)); 
   
app.get('/', function (req, res) {
  const indexsit = fs.readFileSync("./index.html", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(indexsit)
})

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
  });



