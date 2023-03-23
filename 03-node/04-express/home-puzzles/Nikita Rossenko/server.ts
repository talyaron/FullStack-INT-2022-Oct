import express from "express";
import fs from "fs";
const app = express();

app.use(express.static("./public"))

app.get('/', function (req, res) {

  const indexFile = fs.readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r",
      });

    res.send(indexFile)
  })
app.get('/style.css', function (req, res) {

  const style = fs.readFileSync("./style.css", {
        encoding: "utf8",
        flag: "r",
      });

    res.send(style)
  })
  
app.listen(5000, ()=> {
    console.log("Server started at localhost port 5000")
})
