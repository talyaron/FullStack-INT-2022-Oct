import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/usersModel";

interface Product {
    name:string;
    descreption:string;
    price:number;
    imgUrl:string;
}

export const ProductSchema = new Schema ({
    name:String,
    descreption:String,
    price:String,
    imgUrl:String,
})


const ProductModel = mongoose.model("products",ProductSchema);

export default ProductModel;