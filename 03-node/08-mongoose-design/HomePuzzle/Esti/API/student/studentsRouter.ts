import  express ,{ Router }  from "express";
import { createNewStudent } from "./studentsControl";

const routeStudents = express.Router()

routeStudents.post('/create-new-students' , createNewStudent)

export default routeStudents
