import mongoose , {Schema} from "mongoose";
import { TeacherSchema }   from '../teachers/teachersModel'

export interface Course{
    name:string,
}

 export const CourseSchema = new Schema({
    name:String,
    teacher:TeacherSchema
 });

 const CourseModel = mongoose.model('courses' , CourseSchema);

 export default CourseModel