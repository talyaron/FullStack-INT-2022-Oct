import express from 'express';
import { v4 as uuidv4 } from 'uuid';


  class Grade {
    uid:string = `grade-${uuidv4()}`
    constructor(
        public courseName:string,
        public assignmentName:string,
        public score:number,
        public date?:Date
    ){}
  }

  class Student {
    uid:string = `student-${uuidv4()}`
    grades: Grade[] = [];
    constructor(
        public Fname:string,
        public Lname:string,
    ){}
  }
//   ARRAY
const students:Student[] = []
// ADD students
students.push(new Student("Orel" , "Karako"))
students.push(new Student("Yoram" , "Carmeli"))
students.push(new Student("Osher" , "Ohayon"))
students.push(new Student("Sagiv" , "Ifrah"))

const app = express()
const PORT = 3000;

function findMe(Fname:string , Lname:string):Student | []{
try {
    const findMe = students.find(s=> s.Fname === Fname && s.Lname === Lname);
    if(!findMe) throw new Error('no find you in the server')
    return findMe
} catch (error) {
 console.error(error)   
 return []
}
}

const me = findMe("Orel", "Karako") as Student;
me.grades.push(new Grade("react" , "Components" , 100))

app.use(express.static("public"))
app.use(express.json())


app.get('/api/students' , (req , res)=>{
    try {
        if(!students) throw new Error('the Students Array not founded')
        res.status(201).send({success:true , students})
    } catch (error) {
        console.error(error)
        res.status(500).send({success:false})
    }
})

app.get('/api/students/courses' , (req , res)=>{
    try {
        if(!students) throw new Error('the Students grades Array not founded')
        let courseNames:string[]= []
        const gradesAll = students.forEach(s=>{
                s.grades.forEach(g=>{
                    courseNames.push(g.courseName)
                })
            })
        res.status(201).send({success:true , courseNames})
    } catch (error) {
        console.error(error)
        res.status(500).send({success:false})
    }
})

app.listen(PORT , ()=>{
    console.log(`the Server Listen to PORT :${PORT}`)
})