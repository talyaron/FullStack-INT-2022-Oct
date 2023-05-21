import mongoose from 'mongoose'
import { IUser } from '../User/userModel';
import { IProduct } from '../Product/productModel';

const { Schema } = mongoose;

//Interface
export interface IReview extends Document{
    user: IUser,
    product: IProduct,
    message: string,
    rating: number
}

//Scheme
export const ReviewSchema = new Schema<IReview>(
    {
        user:{
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        product:{
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        },
        message: {
            type: String,
            required: [true, "Please add a message"],
        },
        rating: {
            type: Number,
            required: [true, "Please add a rating between 1 and 5"],
            min: 1,
            max: 5,
          },
    },
    { 
        timestamps: true
    },
)

//Model
const ReviewModel = mongoose.model('Review', ReviewSchema)

export default ReviewModel