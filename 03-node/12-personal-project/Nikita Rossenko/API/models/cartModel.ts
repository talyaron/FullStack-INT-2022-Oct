import { Schema, model } from "mongoose";
import { starshipSchema } from "./starshipModel";

export const CartSchema = new Schema({
  user: { type: String, required: true },
});

export const CartItemSchema = new Schema({
  product: starshipSchema,
  quantity: { type: Number, default: 1 },
  cart:CartSchema
});


export const CartModel = model("Cart", CartItemSchema);