import * as dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose'

dotenv.config()
const uri = process.env.MONGODB_URI
if(uri){
    mongoose.connect(uri)
    .then(()=>{
        console.log("DB connected");
    }).catch(err=>console.log(err));
    
}else{
console.log("not found uri DB");
}


  const UserSchema = new Schema({
    name: String,
    src: String,
  });
  
  const UserModel = mongoose.model("users", UserSchema);

const app = express();

app.use(express.json())
app.use(express.static('public'));

app.get("/api/get-users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000,()=>{
    console.log(`server listen to Port:3000`);
})