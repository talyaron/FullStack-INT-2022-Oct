////////////////model//////////////////
const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Article{
    uid: string;
    constructor(
        public title: string,
        public paragraph: string,
        public imageUrl: string,
        public date?: string,
    ){
        this.uid = `${uid()}`
    }
}

const articles: Article[] = [];

articles.push(new Article(
    "KIA MVP TRACKER: LATEST FROM CONTENDERS",
    "Stay up to date on the race for Kia NBA MVP with a look at the latest performances from the top candidates",
    "https://cdn.nba.com/manage/2023/03/giannis-embiid-jokic-split-2023.png?w=784&h=441"
    )
)

articles.push(new Article(
    "REPORTS: LEBRON AIMS TO RETURN BEFORE END OF SEASON",
    "The Lakers have been without the NBA's all-time leading scorer since February.",
    "https://cdn.nba.com/manage/2023/03/lebron-james-iso-looks.jpg?w=735&h=413"
    )
)

articles.push(new Article(
    "CAN THE WARRIORS OVERCOME BAD ROAD RECORD?",
    "Breaking down stats and history on the uphill path Golden State could face in the postseason.",
    "https://cdn.nba.com/manage/2023/03/USATSI_20257520-scaled-e1679586632244.jpg?w=735&h=413"
    )
)

articles.push(new Article(
    "KIA ROOKIE LADDER: TOP 5 REMAINS INTACT",
    "Detroit's Jaden Ivey is embracing what comes at him in his 1st NBA season as we take stock of the Kia Rookie of the Year chase",
    "https://cdn.nba.com/manage/2023/03/jaden-ivey-looks-on-iso.jpg?w=735&h=413"
    )
)

const admins: object[] = [{name: "amit", password: "123"}];

////////////////////////////// Server /////////////////////////

import express from "express";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));


app.get("/api/articles", (req, res) => {
    try {
      res.send({ articles });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });


app.post("/api/login", (req, res) => {
    try {
      const data = req.body;
      admins.push(data);
      res.status(201).send({ ok: true });
  
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
});

app.post("/api/articles", (req, res) => {
    try {
      const data = req.body;
      articles.push(data);
      res.status(201).send({ ok: true });
  
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
});

app.patch("/api/articles/:uid", (req, res) => {
    try {
    const article = articles.find(article => article.uid === req.params.uid);
    if (!article) return res.sendStatus(404);
    const data = req.body;
    article.title = data.title;
    article.paragraph = data.paragraph;
    console.log("articles in patch", articles)
    res.status(201).send({ ok: true });
  
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
});



const port = 3000;
app.listen(port, ()=>{
    console.log(`server listen on ${port}`);
})

