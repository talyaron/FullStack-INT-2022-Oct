import express from "express";
import fs from "fs";
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    const indexFile = fs.readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r",
      })
      res.send(indexFile)
})
app.get('/login', function (req, res) {
  
    res.send("<h1>group 4 login</h1>")
})



app.listen(3000)