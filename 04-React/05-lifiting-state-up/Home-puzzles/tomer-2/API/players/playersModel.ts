import {Schema, model} from "mongoose";

export const playerSchema = new Schema({
    image1 : String,
    image2 : String,
});

const playerModel = model("player", playerSchema);

export default playerModel;