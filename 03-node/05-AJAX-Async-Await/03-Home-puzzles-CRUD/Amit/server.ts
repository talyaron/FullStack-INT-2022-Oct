import express from "express";

const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

////////data//////////////
//schema

const StudentSchema = new Schema ({
    name: String,
    grades: [],
})

const StudentModel = mongoose.model("students", StudentSchema);

const GradeSchema = new Schema ({
    test: String,
    value: Number,
})

const GradeModel = mongoose.model("grades", GradeSchema);

//claesses

class Student {
    public grades: [GradeSchema];
      constructor(
          public name: string,
          public _id?: string,
          ) {}
  
    getSimpleStudent() {
      return { _id: this._id, name: this.name, grades: this.grades };
    }
  }
  
class Grade {
    constructor(
        public test: string,
        public value: number,
        public _id?: string,
        ) {}

    getSimpleGrade() {
    return { _id: this._id, test: this.test, grades: this.value };
    }
}


const students: Student[] = []
////////////////////////////////////////////////////////////




////getting data from public
app.use(express.json());







//data route

//get (from server)
app.get("/api/get-students", async (req, res) => {
  try {
    const students = await StudentModel.find({});

    res.send({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add student
app.post("/api/add-student", async (req, res) => {
  try {
    const { name } = req.body;
    console.log("{ name }" , name);
    
    const studentDB = await StudentModel.create({name});
    console.log(studentDB);
    
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});



// add grade to student
app.post("/students/:studentId/grades", async (req, res) => {
    try {
        console.log("req.params.studentId" , req.params.studentId);
        
        const student =  students.find(student =>{
console.log("student._id" ,student._id);

         student._id === req.params.studentId});
    if (!student) return res.sendStatus(404);
console.log("student", student);
      const { newGrade } = req.body;
      
      console.log("{ newGrade }", newGrade);
      if (!newGrade) throw new Error("No new Grade in data");
    
    //   if (!student) throw new Error("No student in data");

      const gradeDB = await GradeModel.create({newGrade}); 
console.log(gradeDB);

    //   student.grades.push(gradeDB);
      res.status(201).send({ ok: true });

    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });



app.delete("/api/delete-student", async (req, res) => {
    try {
      const { _id } = req.body;
  
      const deletedUser = await StudentModel.deleteOne({_id})
      const students = await StudentModel.find({})
     
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });



//static file
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
