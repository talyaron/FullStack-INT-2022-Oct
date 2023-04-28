import mongoose from 'mongoose'
import { ITeacher } from '../teachers/teachersModel';
const { Schema } = mongoose;

//Interface
export interface ISubject extends Document{
    name: string
    description: string
    teacher:ITeacher[]
}
//Scheme
export const SubjetSchema = new Schema<ISubject>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        teacher: [
            {
              type: Schema.Types.ObjectId,
              ref: "Teacher",
            },
        ],
    }
)

const SubjetModel = mongoose.model('Subjet',SubjetSchema)

export default SubjetModel