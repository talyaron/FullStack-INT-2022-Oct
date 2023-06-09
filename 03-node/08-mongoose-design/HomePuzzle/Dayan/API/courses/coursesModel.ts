import mongoose from 'mongoose'
import { ISudent, StudentSchema } from '../students/studentsModel';
import { ITeacher, TeacherSchema } from '../teachers/teachersModel';
import { ISubject, SubjetSchema } from '../subjects/subjectsModel';
import { AdminSchema, IAdmin } from '../admin/adminModel';
const { Schema } = mongoose;

//Interface
export interface ICourse extends Document{
    name: string
    description: string
    code: string,
    createdBy: IAdmin,
    teachers:ITeacher[],
    students:ISudent[],
    subjects:ISubject[]
}

//Scheme
export const CourseSchema = new Schema<ICourse>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            default: function(){
                try{
                    return (
                        this.name
                        .split(" ") //splits a string into an new array of substrings.
                        .map(name => name[0]) //creates a new array from calling a function for every array element.
                        .join("") //returns an array as a string.
                        .toUpperCase()+
                        Math.floor(10 + Math.random() * 90) +
                        Math.floor(10 + Math.random() * 90)
                    )
                }
                catch(error){
                console.error(error)
                }
            }
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
          },
        teachers: [TeacherSchema],
        students: [StudentSchema],
        subjects: [SubjetSchema],
    }
)

const CourseModel = mongoose.model('Course',CourseSchema)

export default CourseModel