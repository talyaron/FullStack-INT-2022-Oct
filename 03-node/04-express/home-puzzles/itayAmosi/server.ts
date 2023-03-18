
import express from "express";
import fs from "fs";
import fs2 from "fs";
const app = express();
app.use(express.static(__dirname + `/public`));

app.get("/", function (req, res) {
  const indexFile = fs.readFileSync("./index.html", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(indexFile);
});

app.get("/myImages", function (req, res) {
  const indexFile2 = fs2.readFileSync("./myImages.html", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(indexFile2);
});

app.listen(4000);
