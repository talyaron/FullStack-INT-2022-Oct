import express from "express";
import fs from "fs";
const app = express();

import { uid } from "./helpers";
import add from './helpers'

//static file
app.use(express.static('./client'))

//routes
// app.get("/", mainRoute);

// function mainRoute(req:any, res:any) {
//   console.log(req);
//   console.log("res:....",res);
//   //read file
//   const indexFile = fs.readFileSync("./index.html", {
//     encoding: "utf8",
//     flag: "r",
//   });

//   res.send(indexFile);
// }
//data routes
app.get("/login", function (req, res) {
  res.send(`<h1>Login 3</h1><h2>Welcome to our sit. you got this id ${uid()}</h2>`);
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
