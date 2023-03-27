import express from 'express';
import fs from 'fs';
import { title } from 'process';
import { uuid } from 'uuidv4';
const app = express();
app.use(express.static(`./public`));
app.use(express.json());


class Admin {
    constructor(
        public name: string,
        public lastName :string,
        public password: string,
    ){}
}

class Article {
    constructor(
      public tital: string,
      public src: string,
      public paregraph: string
    ) {}
  }
  
  const articles: Article[] = [
    {
      tital: "Many schoolchildren among Indonesia quake dead!",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3555/production/_127735631_workbuilding.png.webp",
      paregraph:
        "the death toll from monday's earthquake on java island soars to 268 with many people stiendi sit rerum magni",
    },
    {
      tital: "Follow World Cup: France v Australia",
      src: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/11/22/a648fbb4-d9f7-41fd-8213-f6d6186bafe2.jpg",
      paregraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ratione",
    },
    {
      tital: "Follow World Cup: France v Australia",
      src: "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/150EE/production/_127745268_tv080112965.jpg",
      paregraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ratione",
    },
  ];

  const admins: Admin [] = [
    {
        name:"itai",
        lastName:"gelberg",
        password:"123123",

    },
    {
        name:"itay",
        lastName:"amosi",
        password:"1235",

    },
  ]

  app.get("/api/get-articles", (req, res) => {
    try {
        res.send({ articles });

    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
  });

  app.get("/admin", function (req, res) {
    const admin = fs.readFileSync("./public/admin.html", {
      encoding: "utf8",
      flag: "r",
    });
    res.send(admin);
  });

  app.post(`/admin`, (req, res) => {
        fs.readFileSync("./public/admin.html", {
        encoding: "utf8",
        flag: "r",
      });
  });

  app.post("/api/add-article", (req, res) => {
    const { title, src, paragraph } = req.body;
    console.log(req.body)
    if (!title || !src || !paragraph) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    const newArticle = new Article(title, src, paragraph);
    articles.push(newArticle);
    res.status(200).send({ok:true,articles});
  });

app.listen(3000,()=>{console.log(`server listening on port 3000`)});