import StudentModel from "./studnetsModel";
import fs from 'fs'
export const createNewStudent = async  (req:any , res:any) =>{
try {
    const studentName =  req.body.name
    console.log(studentName);
    const newStudent = await StudentModel.create({name:studentName});
    res.send(newStudent)
    const newFile =  fs.writeFile(`myName.txt`, studentName.toString() , (err) => {
        if (err)
          console.log(err);
        else {
          console.log(fs.readFileSync(`myName.txt`, "utf8"));
        }
      });
    
} catch (error) {
    console.error(error)
}
}

 