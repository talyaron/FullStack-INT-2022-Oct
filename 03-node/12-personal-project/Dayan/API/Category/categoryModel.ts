import mongoose from 'mongoose'
import { IProduct } from '../Product/productModel';

const { Schema } = mongoose;

//Interface
export interface ICategory extends Document{
    name: string,
    products: IProduct[]
}

//Scheme
export const CategorySchema = new Schema<ICategory>(
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
const CategoryModel = mongoose.model('Category', CategorySchema)

export default CategoryModel