import express from "express";

const app = express();

//data route
app.get("/getuid", (req: any, res: any) => {
  setTimeout(() => {
    res.send({uid:Math.random().toString(16).slice(2)});
  }, 0.1);
});

//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
