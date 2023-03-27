import express from "express";

const app = express();
app.use(express.json());


app.use(express.static("./client"));


// interface
interface User {
name:string;
src:string;
}

const users:User[]=[
    {
        name:"simon",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Meeting_between_PM_Peres_with_newly_elected_PM_Nethanyahu%2C_1996_Dan_Hadani_Archive_II.jpg/220px-Meeting_between_PM_Peres_with_newly_elected_PM_Nethanyahu%2C_1996_Dan_Hadani_Archive_II.jpg"
    },
    {
        name:"dudu",
        src:"https://www.kipa.co.il/userFiles/735-415/334694_2032d904f16f8df9a896995cc981aedf.jpg"
    }
];

app.get("/api/getUsers", (req, res)=>{
    try {
        res.send({ users });
    } catch (error:any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
})
app.post("/api/add-userdetils", (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      users.push(data);
      res.status(201).send({ ok: true });
  
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });




app.listen(3000, () => {
  console.log("server listen on port 3000");
});


