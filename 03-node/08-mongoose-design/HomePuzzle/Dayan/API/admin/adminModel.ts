import mongoose from 'mongoose'
import { ITeacher, TeacherSchema } from '../teachers/teachersModel';
import { ISudent, StudentSchema } from '../students/studentsModel';
import { CourseSchema, ICourse } from '../courses/coursesModel';
const { Schema } = mongoose;

//Interface
export interface IAdmin extends Document{
    name: string
    email: string
    password: string
    role: string
    teachers: ITeacher[]
    students: ISudent[]
    courses: ICourse[],
    matchPassword: (pw: string) => Promise<boolean>
}

//Scheme
export const AdminSchema = new Schema<IAdmin>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin"
        },
        teachers: [TeacherSchema],
        students: [StudentSchema],
        courses: [CourseSchema],
    }
)

//Model
const AdminModel = mongoose.model('Admin',AdminSchema)

export default AdminModel