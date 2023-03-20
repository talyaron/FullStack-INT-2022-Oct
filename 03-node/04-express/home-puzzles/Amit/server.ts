import express from "express";
import fs from "fs";

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    const indexFile = fs.readFileSync("./portfolio.html", {
        encoding: "utf8",
        flag: "r",
      })
      res.send(indexFile)
})


app.get('/file1', function (req, res) {
  
    return res.redirect('/../FullStack-INT-2022-Oct/01-HTML-CSS/02-position-box-model/HW/amit-zaltsberger/instagram.html');
})



app.listen(3000)
