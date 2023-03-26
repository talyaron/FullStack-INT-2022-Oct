import express from "express";

const app = express();
const PORT = 3000;

interface news {
    name:string;
    article:string;
}

const articles:news [] = [
    {
        name:"Filip Petrusev",
        article:"https://www.euroleaguebasketball.net/euroleague/news/filip-petrusev-zvezda-this-is-where-i-feel-comfortable/?pageTitle=Homepage&historyUrl=/euroleague/"

       },

   {
    name:"Vasilije Micic",
    article:"https://www.euroleaguebasketball.net/euroleague/news/rememberthewhy-with-vasilije-micic-i-wanted-to-create-something-from-the-bottom-from-zero/?pageTitle=Homepage&historyUrl=/euroleague/"
   },

   {
    name:"Lorenzo Brown",
    article:"https://www.euroleaguebasketball.net/euroleague/news/lorenzo-brown-hops-aboard-the-crossover/?pageTitle=Homepage&historyUrl=/euroleague/"
   }
]





app.get("/articles", (req,res) =>{
    res.send("hello")
    
    })

app.use(express.static('./public'))
    

app.listen(PORT, ()=>{
    console.log("server run at:" + PORT)
})
