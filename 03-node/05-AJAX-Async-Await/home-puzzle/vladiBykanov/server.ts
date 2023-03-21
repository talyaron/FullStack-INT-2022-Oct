import express from "express";
const app = express();

import path from "path";
const PORT = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
