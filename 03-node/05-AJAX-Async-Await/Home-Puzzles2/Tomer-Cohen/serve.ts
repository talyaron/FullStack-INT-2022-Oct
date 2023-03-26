import express from "express";

const app = express();

//to be able to get data from client add this line
app.use(express.json());

//data
class Article{
    constructor(
        public name: string,
        public content: string,
        public pic: string
        ){}
}
const articles:Article[]= []
articles.push(new Article('World Cup','15,000 dead for 5760 minutes of football. Shame on you','https://e0.365dm.com/21/10/2048x1152/skysports-world-cup-trophy_5555593.jpg'))
articles.push(new Article('disgrace','Iran players decline to sing national anthem','https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/11D8F/production/_127730137_cc9b297c676b631c5964fe023542e959cf848ccf.jpg'))
articles.push(new Article('Indonesia','quake kills 162 and injures hundreds','https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/14F3F/production/_127732858_javaearthquake-index2-reuters.jpg'))

//data route

//get (from server)
app.get("/api/get-articles", (req, res) => {
  try {
    res.send({ articles });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add
// app.post("/api/add-articles", (req, res) => {
//   try {
//     const data = req.body;
//     console.log(data);
//     users.push(data);
//     res.status(201).send({ ok: true });

//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });

//static file
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
