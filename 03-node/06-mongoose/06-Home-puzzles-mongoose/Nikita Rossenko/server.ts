import express from 'express';
import fs from 'fs'
import { v4 as uuid } from 'uuid'
const app = express();

import mongoose from 'mongoose'

app.use(express.static('./public'))
app.use(express.json())

class student {
    name:string;
    lastName:string;
    grades:[];
    uid:string;

    constructor(name:string,lastName:string){
        this.name = name;
        this.lastName = lastName;
        this.uid = uuid()
        this.grades = []
    }
}

const students:any[] = []
app.get('/', (req,res) => {

    const index = fs.readFileSync('index.html', {encoding:'utf8', flag:'r'});
    res.send(index);
})
app.get('/api/get-students', (req,res) => {

    res.send({students});
})

app.post('/api/add-student', (req,res) => {
    try {
        const newStudent = req.body;
        let userExists = false;
        if (students.length > 0){
            for (let i = 0 ; i<students.length; i++){
                if (students[i].name == newStudent.name && students[i].lastName == newStudent.lastName){
                    userExists = true
                    res.status(400).send({ok:false, status:'User already exists'});
                }
            }
            if (userExists == false){
                students.push(new student(newStudent.name,newStudent.lastName));
                res.status(201).send({ok:true});
            }
        }else {
            students.push(new student(newStudent.name,newStudent.lastName));
            res.status(201).send({ok:true});
        }
        
    } catch (error) {
        res.status(400).send({ok:false});
        console.log(error);
    }
})

app.patch('/api/add-grade', (req,res) => {
    try {
        let gradeExist = false;
        const {uid, gradeName, gradePoints} = req.body;
        for (let i = 0 ; i < students.length ; i++){
            if(uid == students[i].uid){
                for (let j = 0 ; j < students[i].grades.length ; j++ ){
                    if (students[i].grades[j].gradeName == gradeName){
                        students[i].grades[j].gradePoints = gradePoints
                        gradeExist = true
                        res.status(201).send({ok:true});
                    }
                }
                if (!gradeExist){
                    students[i].grades.push({gradeName, gradePoints})
                    res.status(201).send({ok:true});
                }

                console.log(students[i])
            }
        }
        
    } catch (error) {
        res.status(400).send({ok:false});
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})