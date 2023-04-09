import express from "express";

const app = express();

//to be able to get data from client add this line
app.use(express.json());

//data
interface User {
  name: string;
  src: string;
  age:string;
}

const users: User[] = [
  {
    name: "Moshe",
    src: "https://www.kipa.co.il/userFiles/296342_46e5aff9328a26cb3257ce4f81a1abd3.jpg",
    age:'20',
  },
  {
    name: "Aharon",
    src: "https://www.daat.ac.il/encyclopedia/images/aharon.jpg",
    age:'59',
  },
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
    const data = req.body;
    console.log(data);
    users.push(data);
    res.status(201).send({ ok: true });

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
