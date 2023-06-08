import express from "express";

const app = express();


app.use(express.static('./client'));

interface Balloons {
    img:string;
}

const balloons: Balloons[] = [
    {
        img:"https://image.pngaaa.com/310/991310-small.png",
    },
    {
        img:"https://s.pngkit.com/png/small/8-80252_sweet-birthday-free-balloon-transparent-background-purple-balloon.png",
    },
    {
        img:"https://s.pngkit.com/png/small/44-446923_green-balloon-png-image-transparent-background-green-balloon.png",
    },
    {
        img:"https://s.pngkit.com/png/small/118-1186105_red-balloon-png-transparent-background-red-balloon-png.png",
    },
    ]

app.get("/api/get-word",(req, res)=>{
    res.send({ok:true})
})

app.get("/api/get-balloons",(req, res)=>{
    res.send({balloons})
})
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
