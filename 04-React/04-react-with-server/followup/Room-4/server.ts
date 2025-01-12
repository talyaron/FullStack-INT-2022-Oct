import express from "express";

const app = express();


app.use(express.static('./client'));

interface Dogs{
    img:string;
    name:string;
}

const dogs:Dogs[] = [
    {
        name:"pupi",
        img:"data:image/jpeg;base64,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",
    },
    {
        name:"saimon",
        img:"https://static.vecteezy.com/system/resources/thumbnails/009/886/106/small/cute-puppies-pomeranian-mixed-breed-pekingese-dog-sitting-png.png",
    },
    {
        name:"joker",
        img:"https://www.pngall.com/wp-content/uploads/5/Pug-Dog-PNG-Image.png",
    },
    {
        name:"bubele",
        img:"https://pngimg.com/d/dog_PNG50331.png",
    },
    {
        name:"luky",
        img:"https://pngsource.in/assets/thumbnails/Dog-PNG-Background.png",
    },
]

app.get("/api/get-word",(req, res)=>{
    res.send({ok:true})
})

app.get("/api/get-dogs",(req, res)=>{

    res.send({dogs})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
