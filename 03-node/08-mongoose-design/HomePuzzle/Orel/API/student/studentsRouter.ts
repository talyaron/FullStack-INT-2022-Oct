import  express ,{ Router }  from "express";
import { createNewStudent } from "./studentsControl";

const routeStudent = express.Router()

routeStudent.post('/create-new-student' , createNewStudent)

export default routeStudent
