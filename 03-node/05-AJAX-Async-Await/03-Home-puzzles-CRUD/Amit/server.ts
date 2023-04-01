import express from "express";

const app = express();


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
    console.log(name);
    
    const studentDB = await StudentModel.create({name});
    console.log(studentDB);
    
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add grade to student
// app.post("/api/add-students/add-grade", (req, res) => {
//     try {
//       const { name, uid } = req.body;  

//       if (!name) throw new Error("No name in data");
//       if (!uid) throw new Error("No uid in data");

//       const student = students.find((user) => user.uid === uid);
//       if (!student) throw new Error("No student in data");

//       const {test, value } = req.body;

//       student.grades.push(new Grade(test, value));
//       res.status(201).send({ ok: true });

//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   });
  

//update

// //update whole entity
// app.put("/api/update-user", (req, res) => {
//   try {
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });

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



//static file
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
