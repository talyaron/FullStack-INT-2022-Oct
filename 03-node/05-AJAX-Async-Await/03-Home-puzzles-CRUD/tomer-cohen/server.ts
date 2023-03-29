import express from "express";
import { uuid } from "uuidv4";

const app = express();

app.use(express.json());

class Joke {
  public uid: string = uuid();
  constructor(public name: string ,public subtext:string) {}

  getSimpleUser() {
    return { uid: this.uid, name: this.name  , subtext: this.subtext};
  }
}

const jokes: Joke[] = [
    new Joke(
        "Son of a programmer","son asks his programmer father son: Dad, why does the sun rise in the east and set in the west? Father: If it works, don't touch it"
    ),
    new Joke(
        "nak nak joke",'Knock knock!.who is there?. The stay is very long…. JAVA.'
    ),
    new Joke("Question","How many Microsoft programmers does it take to change a light bulb? Answer: Not one. They will make darkness the standard and force everyone to work according to it."
    ),
    new Joke("lights bulb","How many developers do you need to change a bulb, none of this is a hardware problem"),

];

app.get("/api/get-jokes", (req, res) => {
  try {
    res.send({ jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/api/add-joke", (req, res) => {
  try {
    const { name, subtext } = req.body;
    console.log(name, subtext);
    jokes.push(new Joke(name, subtext));
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.put("/api/update-joke", (req, res) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});


app.patch("/api/update-user-joke", (req, res) => {
  try {
    const { name, uid } = req.body;

    if (!name) throw new Error("No name in data");
    if (!uid) throw new Error("No uid in data");

    const user = jokes.find((user) => user.uid === uid);
    if (!user) throw new Error("No user in array");
    user.name = name;

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

    const _jokes = jokes.map((user) => user.getSimpleUser());
    
    res.send({ ok: true,jokes:_jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
