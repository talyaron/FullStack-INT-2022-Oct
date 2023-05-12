import mongoose from 'mongoose'

const { Schema } = mongoose;

//Interface
export interface IAdmin extends Document{
    fullname: string,
    email: string,
    password: string,
    role: string
}

//Scheme
export const AdminSchema = new Schema<IAdmin>(
    {
        fullname: {
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
        }
    },
    { timestamps: true }
)

//Model
const AdminModel = mongoose.model('Admin',AdminSchema)

export default AdminModel