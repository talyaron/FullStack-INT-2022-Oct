import express from 'express';
const app = express();

app.use(express.static(`./public`));

app.get(`/random-colors`, (req: any, res: any) => {
    res.send({randomColors: Math.floor(Math.random()*16777215).toString(16)});
});

app.listen(3000, () => {
    console.log("server listen on port 3000");
  });