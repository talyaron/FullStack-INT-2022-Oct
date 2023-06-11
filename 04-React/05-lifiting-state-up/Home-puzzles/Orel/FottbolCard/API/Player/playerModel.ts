import { Schema, model } from "mongoose";

export interface IPlayer {
    name: string,
    srcHappy: string,
    srcAngry: string,
    speed: string,
    clicked: boolean
}

export const PlayerSchema = new Schema({
    name: {
        type:String,
        default:"player"
    },
    srcHappy: {
        type:String,
        default:"https://www.shareicon.net/data/512x512/2016/07/21/799340_user_512x512.png"
    },
    srcAngry: {
        type:String,
        default:"https://www.shareicon.net/data/512x512/2016/07/21/799340_user_512x512.png"
    },
    speed: {
        type:Number, 
        default:10
    },
    clicked: {
        type:Boolean,
        default:false
    }
})

const PlayerModel = model('players', PlayerSchema)

export default PlayerModel;