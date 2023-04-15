import mongoose ,{Schema} from 'mongoose'

export interface Students{
    name:string,
}

export const StudentsSchema = new Schema({
    name:String,
});

const StudentsModel = mongoose.model("students" , StudentsSchema);

export default StudentsModel