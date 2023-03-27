import express from "express";

const app = express();

//data route
app.get("/random-number3333", (req: any, res: any) => {
  setTimeout(() => {
    res.send({ number: Math.round(Math.random() * 100) });
    // res.send({ number: 0 });
  }, 200);
});

//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
