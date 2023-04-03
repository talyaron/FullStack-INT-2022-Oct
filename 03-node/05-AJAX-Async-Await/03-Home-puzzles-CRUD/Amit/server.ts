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
class Student {
    public grades: Grade[] = [];
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
app.post("/api/add-grade", async (req, res) => {
    try {

      const { newGrade, uid } = req.body;
      
    //   console.log("{ test }", test);
    //   console.log("{ value }", value);
      console.log("{ uid }", uid);
      console.log("{ newGrade }", newGrade);



    //   if (!test) throw new Error("No test in data");
    //   if (!value) throw new Error("No value in data");
    //   if (!newGrade) throw new Error("No new Grade in data");
    //   if (!student_id) throw new Error("No student_id in data");

    const student = students.find((student) => student._id === uid);
    console.log(student);
    
      if (!student) throw new Error("No student in data");

    //   const gradeDB = await GradeModel.create({newGrade});
    //   const gradeDB = await GradeModel.create({test, value});  
// console.log(gradeDB);



    //   student.grades.push(gradeDB);
      res.status(201).send({ ok: true });

    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });


  app.post("/api/add-grade", async (req, res) => {
    try {
console.log("req.body", req.body);

      const { newGrade, uid } = req.body;
      
    //   console.log("{ test }", test);
    //   console.log("{ value }", value);
      console.log("{ uid }", uid);
      console.log("{ newGrade }", newGrade);



    //   if (!test) throw new Error("No test in data");
    //   if (!value) throw new Error("No value in data");
    //   if (!newGrade) throw new Error("No new Grade in data");
    //   if (!student_id) throw new Error("No student_id in data");

    const student = students.find((student) => student._id === uid);
    console.log(student);
    
      if (!student) throw new Error("No student in data");

    //   const gradeDB = await GradeModel.create({newGrade});
    //   const gradeDB = await GradeModel.create({test, value});  
// console.log(gradeDB);



    //   student.grades.push(gradeDB);
      res.status(201).send({ ok: true });

    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });

  
















// // transodrm enetiy
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
