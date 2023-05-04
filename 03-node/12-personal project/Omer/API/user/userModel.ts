import mongoose, {Schema} from "mongoose";
import productModel, { product, productSchema } from "../product/productModel";

export interface logIn {
    _id:string,
    name:string,
    password:string,
    products:[product]
}

export const logInSchema = new Schema({
    name:String,
    password:String,
    products:[productSchema]
});

const logInModel = mongoose.model("log-in", logInSchema);

export default logInModel;