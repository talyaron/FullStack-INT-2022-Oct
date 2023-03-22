import express from 'express';
const app = express();

app.use(express.static(`./public`));

app.get("https://dog.ceo/api/breeds/image/random" , (req, res)=>{
})

app.listen(4000, () => {
    console.log("server listen on port 4000");
  });