import mongoose from 'mongoose'

const { Schema } = mongoose;

//Interface
export interface IColor extends Document{
    name: string
}

//Scheme
export const ColorSchema = new Schema<IColor>(
    {
        name:{
            type: String,
            required: true
        }
    },
    { 
        timestamps: true
    },
)

//Model
const ColorModel = mongoose.model('Color', ColorSchema)

export default ColorModel