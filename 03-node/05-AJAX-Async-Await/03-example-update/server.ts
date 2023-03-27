import express from "express";
import { uuid } from 'uuidv4';

const app = express();

//to be able to get data from client add this line
app.use(express.json());

//data
class User {
  public uid:string = uuid();
  constructor(public name:string, public src:string){}
  
}

const users: User[] = [
  new User( "Moshe","https://www.kipa.co.il/userFiles/296342_46e5aff9328a26cb3257ce4f81a1abd3.jpg"),
  new User( "Aharon","https://www.daat.ac.il/encyclopedia/images/aharon.jpg"),

];

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
    const {name, src} = req.body;
    console.log(name, src);
    users.push(new User(name, src));
    res.status(201).send({ ok: true });

  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//update

//update whole entity
app.put("/api/update-user",(req, res)=>{
  try {
    
  } catch (error:any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
})

// transodrm enetiy
app.patch("/api/update-user-name",(req, res)=>{
  try {
    const {name, uid} = req.body;
   
    if(!name) throw new Error("No name in data");
    if(!uid) throw new Error("No uid in data");

    const user = users.find(user=>user.uid === uid);
    if(!user) throw new Error("No user in array");
    user.name = name;


    res.send({ok:true})
    
  } catch (error:any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
})

app.delete('/api/delete-user',(req, res)=>{
  try{
    const {uid} = req.body;
    if(!uid) throw new Error("no uid in data");
    const index = users.findIndex(user => user.uid === uid);
    if(index === -1) throw new Error(`couldn find user in users, with ID ${uid}`)
    users.splice(index, 1);
    
    res.status(204).send({ok:true,users})
  } catch (error:any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
})

//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
