import express from "express";
import fs from "fs";
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/index.html', function (req:any, res:any) {
    const indexFile = fs.readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r",
      })
      res.send(indexFile)
})
app.get('/myWork.html' , (req:any ,res:any)=>{
    res.sendFile(__dirname + "/" + "myWork.html");
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
  });
  