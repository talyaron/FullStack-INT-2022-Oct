
import { Schema, model } from "mongoose";


export const Playerschema = new Schema({
    image: String,
})

const playerModel= model('playermodel', Playerschema)
export default playerModel