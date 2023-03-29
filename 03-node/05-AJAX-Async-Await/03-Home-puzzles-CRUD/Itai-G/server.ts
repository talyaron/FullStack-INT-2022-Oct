import express from "express";
import { uuid } from "uuidv4";

const app = express();
app.use(express.json());

app.use(express.static("./public"));
const port = 3000;

class Course{
    public uid:string=uuid();
    constructor(public name:string){
    }
}
class Student{
    public uid:string = uuid();
    constructor(public name:string,public grade: string,public username:string,){
    }
}
class Teacher{
    public uid:string = uuid();
    constructor(public student:string,public courses:string,public grade:number){}
}

app.listen(port, () => {
    console.log("App listening at http://localhost:${port}");
  });