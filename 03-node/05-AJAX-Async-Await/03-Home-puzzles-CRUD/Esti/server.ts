import express from "express";
import { uuid } from "uuidv4";

const PORT = 3001;
const app = express();

app.use(express.static("./public"));
app.use(express.json());

class Student {
    public uid: string = uuid();
    constructor(public name: string, public email: string) {}
  

    getSimpleSudent() {
      return { uid: this.uid, name: this.name, email: this.email };
    }
  }
  
  const student: Student[] = [
    new Student(
      "Liron",
      "liron@gmail.com"
    ),
    new Student(
      "Fani",
      "fani@gmail.com"
    ),
    new Student(
      "Yarden",
      "yarden@gmail.com"
    ),
    new Student(
      "Zohar",
      "zohar@gmail.com"
    ),]

    
  //data route
  
  //get (from server)
  app.get("/api/get-student", (req, res) => {
    try {
      res.send({ student });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
  
  //add
  app.post("/api/add-student", (req, res) => {
    try {
      const { name, email } = req.body;
      console.log(name, email);
      student.push(new Student(name, email));
      res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
  
  //update
  
  //update whole entity
  app.put("/api/update-student", (req, res) => {
    try {
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
  
  // transodrm enetiy
  app.patch("/api/update-student-name", (req, res) => {
    try {
      const { name, uid } = req.body;
  
      if (!name) throw new Error("No name in data");
      if (!uid) throw new Error("No uid in data");
  
      const studentName = student.find((students) => students.uid === uid);
      if (!student) throw new Error("No student in array");
      students.name = name;
  
      res.send({ok:true})
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
  
  app.delete("/api/delete-student", (req, res) => {
    try {
      const { uid } = req.body;
      if (!uid) throw new Error("no uid in data");
      
      const index = student.findIndex((students) => student.uid === uid);
      if (index === -1)
        throw new Error(`couldnt find student in students, with ID ${uid}`);
      
        students.splice(index, 1);
  
      const _students = students.map((student) => student.getSimplestudent());
      
      res.send({ ok: true,students:_students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
  
  


app.listen(PORT, () =>{
    console.log(`The server litster port: HTTP://locallhost:${PORT} `);
    
})