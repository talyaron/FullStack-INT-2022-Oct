import express from "express";

const app = express();
const PORT = 3000;

interface news {
    name:string;
    article:string;
    id:number;
}

const articles:news [] = [
    {
        name:"Filip Petrusev",
        article:"https://www.euroleaguebasketball.net/euroleague/news/filip-petrusev-zvezda-this-is-where-i-feel-comfortable/?pageTitle=Homepage&historyUrl=/euroleague/",
        id:1
       },

   {
        name:"Vasilije Micic",
        article:"https://www.euroleaguebasketball.net/euroleague/news/rememberthewhy-with-vasilije-micic-i-wanted-to-create-something-from-the-bottom-from-zero/?pageTitle=Homepage&historyUrl=/euroleague/",
        id:2
   },

   {
        name:"Lorenzo Brown",
        article:"https://www.euroleaguebasketball.net/euroleague/news/lorenzo-brown-hops-aboard-the-crossover/?pageTitle=Homepage&historyUrl=/euroleague/",
        id:3
   }
]


app.get("/articles", (req,res) =>{
    res.send({ articles });
    
    })

app.use(express.static('./public'))
    

app.listen(PORT, ()=>{
    console.log("server run at:" + PORT)
})
