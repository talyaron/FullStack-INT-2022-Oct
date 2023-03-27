import express from "express";
import { uuid } from "uuidv4";
const app = express();

//to be able to get data from client add this line
app.use(express.json());

class Jokes {
  public uid: string = uuid();
  constructor(public name: string, public jokes: string) {}
}

const jokes: Jokes[] = [
  new Jokes(
    "Joke#1",
    "Why do bananas have to put on sunscreen before they go to the beach? Because they might peel!"
  ),
  new Jokes("Joke#2", "My boss told me to have a good day. So I went home."),
];

app.get("/api/get-jokes", (req, res) => {
  try {
    res.send({ jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.use(express.static('./public'))

app.listen(3001, () => {
  console.log("server listen on port 3000");
});
