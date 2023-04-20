import mongoose from 'mongoose'
// import { TeacherSchema } from '../teachers/teachersModel';
const { Schema } = mongoose;

//Scheme
export const SubjetSchema = new Schema(
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
    },
    { 
        timestamps: true
    }
)

const SubjetModel = mongoose.model('subjet',SubjetSchema)

export default SubjetModel