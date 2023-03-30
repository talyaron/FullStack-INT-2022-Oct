import express from "express";
const app = express();
import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const uri: string|undefined = process.env.MONGODB_URI;

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB")
}

//to be able to get data from client add this line
app.use(express.json());

//data
interface User {
  // public uid: string = uuid();
  name: string;
  src: string;
}

//connect to DB;

const users: User[] = [];

//data route

//get (from server)
app.get("/api/get-users", (req, res) => {
  try {
    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add
app.post("/api/add-user", (req, res) => {
  try {
    // const { name, src } = req.body;
    // console.log(name, src);
    // users.push(new User(name, src));
    // res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//update

//update whole entity
app.put("/api/update-user", (req, res) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// transodrm enetiy
app.patch("/api/update-user-name", (req, res) => {
  try {
    // const { name, uid } = req.body;
    // if (!name) throw new Error("No name in data");
    // if (!uid) throw new Error("No uid in data");
    // const user = users.find((user) => user.uid === uid);
    // if (!user) throw new Error("No user in array");
    // user.name = name;
    // res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-user", (req, res) => {
  try {
    // const { uid } = req.body;
    // if (!uid) throw new Error("no uid in data");
    // const index = users.findIndex((user) => user.uid === uid);
    // if (index === -1)
    //   throw new Error(`couldnt find user in users, with ID ${uid}`);
    // users.splice(index, 1);
    // const _users = users.map((user) => user.getSimpleUser());
    // res.send({ ok: true, users: _users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
