import mongoose , {Schema} from "mongoose";
import { TeachersSchema }   from '../teachers/teachersModel'

export interface Courses{
    name:string,
}

 export const CoursesSchema = new Schema({
    name:String,
    teacher:TeachersSchema
 });

 const CoursesModel = mongoose.model('courses' , CoursesSchema);

 export default CoursesModel