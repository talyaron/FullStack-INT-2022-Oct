import { uuid } from "uuidv4";

interface Options{
    name?:string;
    eMail?: string;
  }
  
class Student {
    public uid: string = uuid();
    public name:string;
    public eMail: string;
    
    constructor(public userName: string, public passWord: string) {}
    
    
  
    setDetails(options: Options){
      const {name,  eMail} = options;
      if(name) this.name = name;
      if(eMail) this.eMail = eMail;
    }
  }
  
  const student: Student[] = [];
  
  let newStudents: Student = new Student("Liron", "123");
  
      newStudents.setDetails({
        name: "Liron",
        eMail: "1234@gmail.com",
      })
  
      student.push(newStudents)
  
  newStudents = new Student("Fani", "123");
  
      newStudents.setDetails({
        name: "Fani",
        eMail: "1234@gmail.com",
      })
  
      student.push(newStudents)
  
  newStudents = new Student("Hagi", "123");
  
      newStudents.setDetails({
        name: "Hagi",
        eMail: "1234@gmail.com",
      })
  
      student.push(newStudents)
  
   newStudents = new Student("Zohar", "123");
  
      newStudents.setDetails({
        name: "Zohar",
        eMail: "1234@gmail.com",
      })
  
      student.push(newStudents)
  
    // export { student }
    console.log(student)  