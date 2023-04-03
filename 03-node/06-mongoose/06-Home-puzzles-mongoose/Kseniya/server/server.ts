//server
import * as dotenv from "dotenv";
dotenv.config();

//express
import express from "express";
const app = express();
app.use(express.json());

//mongoose
import mongoose, { Schema } from "mongoose";

const uri: string | undefined = process.env.MONGODB_URI;

//connecting to the DB
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

// schema
const UserSchema = new Schema({
  name: String,
  src: String,
});

const UserModel = mongoose.model("users", UserSchema);

//interface
interface IUser {
  name: string;
  src: string;
}

const users: IUser[] = [];

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

//delete 
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

//update

//update name
app.put("/api/update-user", async (req, res) => {
  try {
    const { _id } = req.body;
    const {newName} = req.body

    const updateUserName =await UserModel.updateOne({_id}, {name: newName})



  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//static file
app.use(express.static('../client'));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});