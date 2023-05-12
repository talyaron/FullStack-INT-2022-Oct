import mongoose from 'mongoose'
import { IProduct } from '../Product/productModel';

const { Schema } = mongoose;

//Interface
export interface IBrand extends Document{
    name: string,
    products: IProduct[]
}

//Scheme
export const BrandSchema = new Schema<IBrand>(
    {
        name:{
            type: String,
            required: true,
        },
        products:[
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ]
    },
    { timestamps: true }
)

//Model
const BrandModel = mongoose.model('Brand', BrandSchema)

export default BrandModel