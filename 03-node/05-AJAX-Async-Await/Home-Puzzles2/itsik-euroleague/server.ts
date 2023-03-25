import express from "express";

const app = express()
const PORT = 5000;



interface news {
    name:string;
    src:string;
    article:string;
}

const artic:news[]=[
    {
        name:"",
        src:"",
        article:"",
    },
    {
        name:"Micic",
        src:"https://media-cdn.incrowdsports.com/aa5e7932-e91f-4385-9c07-f4304331a665.jpg?crop=1920%3A1080%3Anowe%3A0%3A0&width=1920&resizeType=fill&format=webp",
        article:"   ",
    },
    {
        name:"",
        src:"",
        article:"",
    },

]







app.get("/", (req, res)=>{
    res.send("test")
})

app.use(express.static("./public"));

app.listen(PORT, ()=>{
    console.log("server run at:" + PORT)
})