import express from "express";

const app = express();


app.use(express.static('./client'));

interface Balloons {
    img:string;
}

const balloons: Balloons[] = [
    {
        img:"https://e7.pngegg.com/pngimages/429/227/png-clipart-balloon-balloon-heart-balloon-thumbnail.png",
    },
    {
        img:"https://e7.pngegg.com/pngimages/960/385/png-clipart-balloon-gold-powder-balloon-balloon-gold-powder-balloon-thumbnail.png",
    },
    {
        img:"https://e7.pngegg.com/pngimages/102/589/png-clipart-balloon-single-purple-balloon-purple-balloon-violet-photography-thumbnail.png",
    },
    {
        img:"https://e7.pngegg.com/pngimages/407/460/png-clipart-balloon-balloon-blue-balloon-thumbnail.png",
    },
    {
        img:"https://e7.pngegg.com/pngimages/220/707/png-clipart-yellow-balloon-illustration-yellow-balloon-font-yellow-balloon-orange-balloon-thumbnail.png",
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
