import express from "express";
import bcrypt from 'bcryptjs';

const app = express();
// import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();


//to be able to get data from client add this line
app.use(express.json());

//data
interface User {
  // public uid: string = uuid();
  name: string;
  src: string;
}

//connect to DB;




// });

//add
app.post("/api/add-user", async (req, res) => {
  try {
   const {username, password} = req.body;
   console.log(username, password)
   
   //register
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    console.log(hash);

    //login
    const isOriginalPasssword = bcrypt.compareSync(password, hash); // true
    console.log("is it the user password? password:",isOriginalPasssword)

    res.status(201).send({ ok: true, login:isOriginalPasssword });
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
