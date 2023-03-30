// imports
import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

// set the server
const app = express();
const PORT = 5000;

// convert to json
app.use(express.json());

// use file in the lab
app.use(express.static("./public"));
app.use(express.static("./routes"));


app.listen(PORT, () =>{
 console.log(`server listen at: http://localhost:${PORT}`)
  })