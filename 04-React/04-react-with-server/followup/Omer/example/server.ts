import express from "express";
const app = express();


//static file
app.use(express.static('./client'));

export interface User{
    name:string,
    age:number
}

const user1:User = {name: "Omer", age:25};
const user2:User = {name: "Guy", age:22};
const user3:User = {name: "Ben", age:28};

const users:User[] = [user1,user2,user3];

app.get("/api/get-users", (req,res) => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({error:error})
    }
})


app.listen(3000, () => {
  console.log("server listen on port 3000");
});
