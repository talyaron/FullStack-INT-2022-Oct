import mongoose, { Schema } from "mongoose";
import { productSchema } from "../collection/collectionsModel";

export interface Cart {
  userId: string;
  productIds: string[];
  _id: string;
  status: CartStatus;
}
export enum CartStatus{
  Open = "open",
  Closed = "closed",
}

export const CartSchema = new Schema({
  userId: String,
  productIds:{required:true, type:[String],default:[]},
  status: {required:true, enum:CartStatus,type:String,default:CartStatus.Open},
  collections: productSchema
});

export const CartModel = mongoose.model("carts", CartSchema);


