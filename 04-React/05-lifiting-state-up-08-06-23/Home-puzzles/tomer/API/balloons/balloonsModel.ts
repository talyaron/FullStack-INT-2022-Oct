import { Schema,model } from "mongoose";

export const balloonSchema = new Schema({
    image: String
});

const balloonModel = model("balloon", balloonSchema);

export default balloonModel;