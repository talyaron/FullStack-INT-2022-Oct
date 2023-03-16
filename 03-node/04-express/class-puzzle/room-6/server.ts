import express from "express";
import fs from "fs";
const app = express();

app.get("/", function (req, res) {
  //read file
  const indexFile = fs.readFileSync("./index.html", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(indexFile);
});

app.listen(3000, () => {
    console.log("server listen on port 3000");
  });