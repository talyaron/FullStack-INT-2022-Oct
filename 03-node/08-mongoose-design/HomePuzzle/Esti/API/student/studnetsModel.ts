import mongoose ,{Schema} from 'mongoose'

export interface Students{
    name: string,
    email: string,
    password: string,
}

export const StudentsSchema = new Schema({
    name:String,
    email:String,
    password:String,
});

const StudentsModel = mongoose.model("students" , StudentsSchema);

export default StudentsModel