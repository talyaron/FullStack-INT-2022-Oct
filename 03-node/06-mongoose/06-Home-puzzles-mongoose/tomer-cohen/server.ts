import express from "express";

const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

app.use(express.json());

interface Joke{
  titel: string,
  subtext:string,
  _id?:string
}


const JokeSchema = new Schema({
  titel: String,
  subtext: String,
});
const JokeModel = mongoose.model("jokes", JokeSchema)



const jokes: Joke[] = [];
 
JokeModel.create({"tomer":"cohen"})

app.get("/api/get-jokes", async (req, res) => {
  try {
    const jokes = await JokeModel.find({})
    res.send({ jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/api/add-joke", async (req, res) => {
  try {
    const { titel, subtext } = req.body;
    const jokeDB = await JokeModel.create({titel,subtext})
    console.log(jokeDB)
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


app.patch("/api/update-joke-name", async (req, res) => {
  try {
    const { titel } = req.body;

    if (!titel) throw new Error("No titel in data");
    const UpdateUserTitel = await JokeModel.updateOne({titel})
    const jokes= await JokeModel.find({})

    res.send({ok:true})
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-joke", async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) throw new Error("no uid in data");
     
    const deltedUser = await JokeModel.deleteOne({_id})
    const jokes= await JokeModel.find({})
    
    res.send({ ok: true,jokes });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
