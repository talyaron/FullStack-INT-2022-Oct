import { Schema, model } from "mongoose";

export const starshipSchema = new Schema({
    starshipName: String,
    starshipModel:String,
    starshipDescription:String,
    starshipPrice: Number,
    itemType:{type:String, default:"starship"}
  });

export const StarshipModel = model("Items", starshipSchema);

export default StarshipModel