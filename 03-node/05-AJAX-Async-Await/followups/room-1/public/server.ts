import express from "express";

const app = express();
const PORT = 3000;

app.get("/random-number", (req:any, res:any) => {
    res.send({number: Math.round(Math.random() * 100)})
});

app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
