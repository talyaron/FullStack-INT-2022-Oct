import express from 'express';
const app = express();

app.use(express.static(`./public`));

app.get("https://dog.ceo/api/breeds/image/random", (req,res)=>{
})


app.listen(3030,()=>{
    console.log("port 3030 listening");
});