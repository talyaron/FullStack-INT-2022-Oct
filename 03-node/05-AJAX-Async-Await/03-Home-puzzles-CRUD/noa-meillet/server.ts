import express from "express";
import { uuid } from "uuidv4";

const app = express();

app.use(express.json());

//data
class Teacher {
  public uid: string = uuid();
  constructor(public name: string, public password:string, public subject: Subject) {}
  }

class Student {
    public uid: string = uuid();
    constructor(public name: string, public password: string, public grades?: Grade[]) {}
  }

  class Subject {
    public uid: string = uuid();
    constructor(public name: string) {}
}

class Grade {
    public uid: string = uuid();
    constructor(public subject: Subject, public student:Student, public task?:string, public grade?:number) {}

    getSimpleGrade() {
        return { uid: this.uid, subject: this.subject ,grade: this.grade, student: this.student };
      }
}

const subjects: Subject[] = [
    new Subject("Math"),
    new Subject("Biology"),
    new Subject("English")
  ];

const teachers: Teacher[] = [
  new Teacher("Yariv Edri", "yariv", subjects[0]),
  new Teacher("Ruti Gabay", "ruti", subjects[1]),
  new Teacher("Ofra Zror", "ofra", subjects[2])
];

const students:Student[] = [
    new Student("Noa Meillet", "noa"),
    new Student("Sagiv Kelly", "sagiv"),
    new Student("Amit Vaknin", "amit")
]

const grades: Grade[] = [
    new Grade(subjects[0],students[0],"homework",94),
    new Grade(subjects[0],students[1],"homework",93),
    new Grade(subjects[0],students[2],"finals"),
    new Grade(subjects[1],students[0]),
    new Grade(subjects[1],students[1],"project"),
    new Grade(subjects[1],students[2],"project",83),
    new Grade(subjects[2],students[0]),
    new Grade(subjects[2],students[1],"project"),
    new Grade(subjects[2],students[2],"homework",89)
];


function getGradesBySubject(subjectToGet:Subject){
    return grades.filter((subject)=> subject.subject==subjectToGet)
}

//get (from server)
app.get("/api/get-students-grades", (req, res) => {
  try {
    const { uuid } = req.body;
    if (!uuid) throw new Error("No uuid in data");

    const teacher = teachers.find((teacher) => teacher.uid === uuid);
    if (!teacher) throw new Error("No teacher in array");
    const subject = teacher.subject;
    res.send( getGradesBySubject(subject) );
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});
/*

//add
app.post("/api/add-user", (req, res) => {
  try {
    const { name, src } = req.body;
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
app.put("/api/update-user", (req, res) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// transodrm enetiy
app.patch("/api/update-user-name", (req, res) => {
  try {
    const { name, uid } = req.body;

    if (!name) throw new Error("No name in data");
    if (!uid) throw new Error("No uid in data");

    const user = users.find((user) => user.uid === uid);
    if (!user) throw new Error("No user in array");
    user.name = name;

    res.send({ok:true})
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-user", (req, res) => {
  try {
    const { uid } = req.body;
    if (!uid) throw new Error("no uid in data");
    
    const index = users.findIndex((user) => user.uid === uid);
    if (index === -1)
      throw new Error(`couldnt find user in users, with ID ${uid}`);
    
      users.splice(index, 1);

    const _users = users.map((user) => user.getSimpleUser());
    
    res.send({ ok: true,users:_users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});
*/

app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
