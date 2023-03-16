import express from "express";
import fs from "fs";
const app = express();

//routes
app.get("/", function (req, res) {
  //read file
  const indexFile = fs.readFileSync("./index.html", {
    encoding: "utf8",
    flag: "r",
  });

  res.send(indexFile);
});

app.get("/login", function (req, res) {
  res.send("<h1>Login 3</h1><h2>Welcome to our site</h2>");
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
