import { Schema, model } from "mongoose";

export const footballPlayerSchmea = new Schema({
  image: String,
});
const footballPlayerModel = model("footballPlayer", footballPlayerSchmea);

export default footballPlayerModel;
