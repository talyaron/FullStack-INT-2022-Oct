import mongoose, { Schema } from "mongoose";

export interface Favourite {
  src: string;
  price: string;
  name: string;
  _id: string;
}

export const FavouriteSchema = new Schema({
  src: String,
  name: String,
  price: String,
});

const FavouriteModel = mongoose.model("favourites", FavouriteSchema);

export default FavouriteModel;
