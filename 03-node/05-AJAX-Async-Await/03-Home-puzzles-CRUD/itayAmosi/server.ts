import express from "express";
// import path from "path";
import { v4 as uuidv4 } from "uuid";
const app = express();
app.use(express.static(`./public`));
app.use(express.json());

//data
export interface IStudent {
  uid: string;
  name: string;
  englishClass: number;
  mathClass: number;
  sportsClass: number;
  historyClass: number;
}
export class Student implements IStudent {
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

const students: Student[] = [new Student("Moshe", 68, 59, 95, 75)];
// console.log(students);

export class Teacher {
  public uid: string = uuidv4();
  constructor(public name: string, public password: number) {}

  getSimple() {
    return {
      uid: this.uid,
      name: this.name,
      password: this.password,
    };
  }
}
const teachers: Teacher[] = [new Teacher("tal", 1235)];

app.post("/api/add-student-grades", (req, res) => {
  const { name, englishClass, mathClass, sportsClass, historyClass } = req.body;
  console.log(req.body);
  if (!name || !englishClass || !mathClass || !sportsClass || !historyClass) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newStudent = new Student(
    name,
    englishClass,
    mathClass,
    sportsClass,
    historyClass
  );
  students.push(newStudent);
  res.status(200).send({ ok: true, newStudent });
});

app.get("/api/get-students", (req, res) => {
  try {
      res.send({ students });

  } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
