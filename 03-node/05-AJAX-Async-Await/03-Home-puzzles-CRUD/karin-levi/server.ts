import express from "express";
import { uuid } from "uuidv4";

const app = express();

app.use(express.json());

class Joke {
    public uid: string = uuid();
    constructor(public value: string) { }
}

const jokes: Joke[] = [
    new Joke("What do you call a boomerang that won’t come back? A stick."),
    new Joke("What time is it when the clock strikes 13? Time to get a new clock."),
    new Joke("How does a cucumber become a pickle? It goes through a jarring experience."),
]

app.get("/jokes", (req, res) => {
    try {
        res.send({ jokes });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

app.post("/joke", (req, res) => {
    try {
        const { value } = req.body;
        jokes.push(new Joke(value));
        res.status(201).send({ ok: true });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

app.patch("/joke", (req, res) => {
    try {
        console.log(req.body)
        const { value, uid } = req.body;

        if (!value) throw new Error("No value in data");
        if (!uid) throw new Error("No uid in data");

        const joke = jokes.find((joke) => joke.uid === uid);
        if (!joke) throw new Error("No joke in array");
        joke.value = value;
        console.log(jokes)
        res.send({ ok: true })
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

app.delete("/joke", (req, res) => {
    try {
        console.log(req.body)
        const { uid } = req.body;
        if (!uid) throw new Error("no uid in data");

        const index = jokes.findIndex((joke) => joke.uid === uid);
        if (index === -1)
            throw new Error(`couldnt find joke in jokes, with ID ${uid}`);

        jokes.splice(index, 1);

        res.send({ ok: true, jokes: jokes });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

app.use(express.static("./public"));

app.listen(3000, () => {
    console.log("server listen on port 3000");
});