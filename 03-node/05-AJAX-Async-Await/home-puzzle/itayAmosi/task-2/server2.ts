import express from 'express';
const app = express();

app.use(express.static(`./public`));

app.listen(4000, () => {
    console.log("server listen on port 4000");
  });