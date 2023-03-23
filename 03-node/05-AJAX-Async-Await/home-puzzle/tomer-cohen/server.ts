import express from "express";

const app = express();

app.get("/https://dog.ceo/api/breeds/image/random", (req: any, res: any) => {

});

app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
