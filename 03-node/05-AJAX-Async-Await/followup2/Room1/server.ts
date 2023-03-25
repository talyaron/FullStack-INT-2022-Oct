import express from "express";
const app = express();
app.use(express.static("./public"));
app.use(express.json());

interface User {
  name: string;
  src: string;
  age: number;
}
const users: User[] = [
  {
    name: "Moshe",
    src: "https://www.kipa.co.il/userFiles/296342_46e5aff9328a26cb3257ce4f81a1abd3.jpg",
    age: 36000,
  },
];

app.get("/get-users", (req, res) => {
  try {
    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/add-user", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    users.push(data);
    res.send({ ok: true });

  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
