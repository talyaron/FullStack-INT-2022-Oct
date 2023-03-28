import express from 'express';
const app = express();

app.use(express.static("./public"));

app.use(express.json());


interface User {
    name: string;
    img: string;
}

const users: User[] = [
    {name: "Omer", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5144a70b-503c-46e8-b74a-5d0f16ac379b/defy-all-day-training-shoe-JL753w.png"}
];

app.get("/api-users", (req, res) => {
    try {
      res.send({ data:users });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

app.post("/api-data", (req, res) => {
    try {
        const data = req.body;
        users.push(data);
        console.log("hello");
        
        res.status(201).send({ok:true})
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

app.listen(3000, () => {
    console.log("Running on port 3000");
})