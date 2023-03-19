// const express = require("express");
import express from "express";
// const path = require("path");
import path from "path";

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
