import express from "express";
import fs from "fs";
const app = express();
app.use(express.static('/public'));

app.get('/', function (req, res) {
    const indexFile = fs.readFileSync("index.html", {
        encoding: "utf8",
        flag: "r",
      })
      res.send(indexFile)
})

app.get('/login', function (req, res) {
  
    res.send(`<h1>Login</h1> <br>  <a href="/">return</a>`)
})



app.listen(3000)
