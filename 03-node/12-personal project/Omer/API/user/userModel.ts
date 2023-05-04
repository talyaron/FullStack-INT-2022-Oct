import mongoose, {Schema} from "mongoose";
import productModel, { product } from "../product/productModel";

export interface logIn {
    _id:string,
    name:string,
    password:string,
    products:[string]
}

export const logInSchema = new Schema({
    name:String,
    password:String,
    products:[String]
});

const logInModel = mongoose.model("log-in", logInSchema);

export default logInModel;