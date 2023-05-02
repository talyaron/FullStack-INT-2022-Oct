import mongoose, { Schema } from "mongoose";

export interface Cart {
  userId: string;
  productIds: string[];
  _id: string;
}

export const CartSchema = new Schema({
  userId: String,
  productIds:{required:true, type:[String],default:[]},
});

const CartModel = mongoose.model("carts", CartSchema);

export default CartModel;
