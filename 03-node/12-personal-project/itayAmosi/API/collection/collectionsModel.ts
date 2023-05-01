import mongoose, { Schema } from "mongoose";

export interface Product {
  src: string;
  price: string;
  name: string;
  descriptions: string;
}

export const productSchema = new Schema({
  src: String,
  name: String,
  price: String,
  descriptions: String,
});

const ProductModel = mongoose.model("collections", productSchema);

export default ProductModel;
