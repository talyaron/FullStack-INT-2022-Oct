import express from "express";
const app = express();

app.use(express.static('./public'));

app.listen(3000);

app.get('/room6', (req:any, res:any) => {
    res.send ('good job');
})