import express from "express";
import fs from "fs";
const app = express();
app.use(express.static(__dirname + `/public`));

app.get("/", function (req, res) {
  const indexFile = fs.readFileSync("./myStory.html", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(indexFile);
});

app.get("/myContact", function (req, res) {
  const indexfile2 = fs.readFileSync("./myContact.html", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(indexfile2);
});

app.listen(3000);