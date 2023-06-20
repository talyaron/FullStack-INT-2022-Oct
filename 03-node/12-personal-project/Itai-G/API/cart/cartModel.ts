import mongoose, { Schema } from "mongoose";

export interface Cart {
  userId: string;
  productIds: string[];
  _id: string;
  status:CartStatus;
}


export enum CartStatus{
    Open = "open",
    Closed = "closed"

}

//Tal: better to have not just products ids, but the whole product object, becaues you would wont to show the product in the UI
export const CartSchema = new Schema({
  userId: String,
  productIds:{required:true, type:[String],default:[]},
  status:{require:true, enum:CartStatus ,type:String,default:CartStatus.Open}
});

export const CartModel = mongoose.model("carts", CartSchema);

