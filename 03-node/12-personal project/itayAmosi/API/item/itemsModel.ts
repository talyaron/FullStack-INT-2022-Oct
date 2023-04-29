import mongoose, { Schema } from "mongoose";

interface Items {
  src: string;
  price: string;
  name: string;
  descriptions: string;
}

export const ItemsSchema = new Schema({
  src: String,
  name: String,
  price: String,
  descriptions: String,
});

const ItemsModel = mongoose.model("Items", ItemsSchema);

export default ItemsModel;
