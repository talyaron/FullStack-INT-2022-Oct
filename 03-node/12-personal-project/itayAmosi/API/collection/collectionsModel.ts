import mongoose, { Schema } from "mongoose";

export interface Collection {
  src: string;
  price: string;
  name: string;
  descriptions: string;
}

export const collectionsSchema = new Schema({
  src: String,
  name: String,
  price: String,
  descriptions: String,
});

const CollectionModel = mongoose.model("collections", collectionsSchema);

export default CollectionModel;
