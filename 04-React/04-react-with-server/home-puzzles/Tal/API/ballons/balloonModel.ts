import { Schema, model } from "mongoose";

export const balloonSchmea = new Schema({
  image: String,
});
const balloonModel = model("balloon", balloonSchmea);

export default balloonModel;
