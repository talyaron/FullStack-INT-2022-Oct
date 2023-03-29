import express from "express";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
const app = express();
app.use(express.static(`./public`));
app.use(express.json());



//data
class Student {
  public uid: string = uuidv4();
  constructor(
    public name: string,
    public englishClass: number,
    public mathClass: number,
    public sportsClass: number,
    public historyClass: number
  ) {}

  getSimple() {
    return {
      uid: this.uid,
      name: this.name,
      englishClass: this.englishClass,
      mathClass: this.mathClass,
      sportsClass: this.sportsClass,
      historyClass: this.historyClass,
    };
  }
}

const students: Student[] = [
  new Student(
    "Moshe",
    68,
    59,
    95,
    75,
  ),
];
console.log(students);
// data route

//get (from server)
// app.get("/", (req, res) => {
//   try {
//     res.send({ students });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });

// //add
// app.post("/api/add-user", (req, res) => {
//   try {
//     const { name, src } = req.body;
//     console.log(name, src);
//     users.push(new User(name, src));
//     res.status(201).send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });

//update

//update whole entity
// app.put("/api/update-user", (req, res) => {
//   try {
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });

// transodrm enetiy
// app.patch("/api/update-user-name", (req, res) => {
//   try {
//     const { name, uid } = req.body;

//     if (!name) throw new Error("No name in data");
//     if (!uid) throw new Error("No uid in data");

//     const user = users.find((user) => user.uid === uid);
//     if (!user) throw new Error("No user in array");
//     user.name = name;

//     res.send({ok:true})
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });

// app.delete("/api/delete-user", (req, res) => {
//   try {
//     const { uid } = req.body;
//     if (!uid) throw new Error("no uid in data");

//     const index = users.findIndex((user) => user.uid === uid);
//     if (index === -1)
//       throw new Error(`couldnt find user in users, with ID ${uid}`);

//       users.splice(index, 1);

//     const _users = users.map((user) => user.getSimpleUser());

//     res.send({ ok: true,users:_users });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// app.post(`/teacher.html`, (req, res) => {
//     fs.readFileSync("./teacher.html", {
//     encoding: "utf8",
//     flag: "r",
//   });
// });

app.listen(4000, () => {
  console.log("server listen on port 4000");
});


