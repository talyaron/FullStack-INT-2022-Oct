import mongoose, {Schema} from "mongoose";

interface PopUpBalloons{

         name:string;
         color:string; 
}


const popUpBalloons:PopUpBalloons[] = [];


export const BalloonSchema = new Schema({
    src: String,
})
 
const BallonModel = mongoose.model("balloons", BalloonSchema)


export default BallonModel