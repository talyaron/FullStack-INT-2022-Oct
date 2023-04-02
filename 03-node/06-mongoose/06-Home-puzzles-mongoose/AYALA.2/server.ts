import express from "express";
// const PORT = 3000;
const app = express();
import mongoose, { Schema } from "mongoose";

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

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

//schema
const UserSchema = new Schema({
  name: String,
  src: String,
});

const UserModel = mongoose.model("users", UserSchema);

//to be able to get data from client add this line
app.use(express.json());

//data
interface User {
  // public uid: string = uuid();
  name: string;
  src: string;

}

//connect to DB;

const users: User[] = [
{name:"joke",
src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iFZSv4HuC6P5wuSSKHbQUVQK8B4dGLBDPg&usqp=CAU"},
];
//data route

//get (from server)
app.get("/api/get-users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add
app.post("/api/add-user", async (req, res) => {
  try {
    const { name, src } = req.body;
    console.log(name, src);

    //add users to DB;
    const userDB = await UserModel.create({ name, src });

    console.log(userDB);

    res.status(201).send({ ok: true });
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
app.patch("/api/update-user-name", async (req, res) => {
  try {
    const { name, src } = req.body;
    console.log(name, src);
    const updateuserDB = await UserModel.updateOne({ name, src });
    const users = await UserModel.find({})
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-user", async (req, res) => {
  try {
    const { _id } = req.body;

    const deltedUser = await UserModel.deleteOne({_id})
    const users = await UserModel.find({})
   
    res.send({ ok: true, users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//static file
app.use(express.static("./client"));

app.listen(3002,()=>{
    console.log("server listen on port 3002");
})
