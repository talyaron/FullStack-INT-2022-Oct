import mongoose, { Schema } from "mongoose";

export interface Product {
  _id?:string
  name: string;
  type:string,
  price:number,
  img:string
}

export const productSchema = new Schema({
  name:String,
  type:String,
  price:Number,
  img:String
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
