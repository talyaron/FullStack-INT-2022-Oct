import express from "express";

const app = express();

const pictures = [
    "https://www.flowernet.co.il/wp-content/uploads/2021/06/new-pic-flowernet-%D7%96%D7%A8%D7%99-%D7%95%D7%A8%D7%93%D7%99%D7%9D-Double-Rose.jpg",
    "https://img.ltwebstatic.com/images3_pi/2022/07/28/16589962587955399e1044c33543cf29da21ccd703_thumbnail_900x.webp"
]

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

//data route
app.get("/random-picture", (req: any, res: any) => {
    const rnd = getRandomInt(pictures.length)
    res.send({ picLink: pictures[rnd] });
});

//static file
app.use(express.static("./public"));

app.listen(3001, () => {
    console.log("server listen on port 3000");
});
