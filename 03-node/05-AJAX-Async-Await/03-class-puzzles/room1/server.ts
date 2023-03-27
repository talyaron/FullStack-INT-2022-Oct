import express from "express";
import { uuid } from "uuidv4";

const app = express();

app.use(express.json());

//data
class Joke {
  public uid: string = uuid();
  constructor(public content: string) {}

  getSimpleJoke() {
    return { uid: this.uid, content: this.content };
  }
}

const jokes: Joke[] = [
  new Joke(
    "why did the chicken cross the street?"),
  new Joke("What’s the best thing about Switzerland? I don’t know, but the flag is a big plus"),
  new Joke ("Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.")
];

app.get("/api/get-jokes", (req, res) => {
  try {
    res.send({ jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add
app.post("/api/add-joke", (req, res) => {
  try {
    const { content } = req.body;
    console.log(content);
    jokes.push(new Joke(content));
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//update

app.patch("/api/update-joke", (req, res) => {
  try {
    const { content, uid } = req.body;

    if (!content) throw new Error("No content in data");

    const joke = jokes.find((joke) => joke.uid === uid);
    if (!joke) throw new Error("No joke in array");
    joke.content = content;

    res.send({ok:true})
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-joke", (req, res) => {
  try {
    const { uid } = req.body;
    if (!uid) throw new Error("no uid in data");
    
    const index = jokes.findIndex((user) => user.uid === uid);
    if (index === -1)
      throw new Error(`couldnt find user in jokes, with ID ${uid}`);
    
      jokes.splice(index, 1);

    const _jokes = jokes.map((user) => user.getSimpleJoke());
    
    res.send({ ok: true,jokes:_jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//static file
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
