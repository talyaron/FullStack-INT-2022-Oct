import mongoose, { Schema } from "mongoose";
import { LogIn, logInSchema } from "../user/userModel";
import { Product, productSchema } from "../product/productModel";

export interface UserProduct {
    _id?: string
    userName: string,
    userId: string,
    productId:string,
    product: Product
}

export const UserProductSchema = new Schema({
    userName: String,
    userId: String,
    productId:String,
    product: productSchema
});

const UserProductModel = mongoose.model("user-product", UserProductSchema);

export default UserProductModel;
